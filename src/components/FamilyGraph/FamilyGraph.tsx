import { useEffect, useRef } from "react";
import cytoscape, { type Core } from "cytoscape";
import { useNavigate } from "react-router-dom";
import type { Pantheon } from "../../types/mythology";
import "./FamilyGraph.css";

interface FamilyGraphProps {
  pantheon: Pantheon;
}

export function FamilyGraph({ pantheon }: FamilyGraphProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cyRef = useRef<Core | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!containerRef.current) return;

    const godIds = new Set(pantheon.gods.map((g) => g.id));
    const parentEdges = new Set<string>();
    const spouseEdges = new Set<string>();
    const siblingEdges = new Set<string>();

    for (const god of pantheon.gods) {
      god.family?.parents?.forEach((id) => {
        if (godIds.has(id)) parentEdges.add(`${id}->${god.id}`);
      });
      god.family?.children?.forEach((id) => {
        if (godIds.has(id)) parentEdges.add(`${god.id}->${id}`);
      });
      god.family?.spouses?.forEach((id) => {
        if (godIds.has(id)) spouseEdges.add([god.id, id].sort().join("|"));
      });
      god.family?.siblings?.forEach((id) => {
        if (godIds.has(id)) siblingEdges.add([god.id, id].sort().join("|"));
      });
    }

    const elements = [
      ...pantheon.gods.map((god) => ({ data: { id: god.id, label: god.name } })),
      ...[...parentEdges].map((key) => {
        const [source, target] = key.split("->");
        return { data: { id: `p-${key}`, source, target, kind: "parent" } };
      }),
      ...[...spouseEdges].map((key) => {
        const [source, target] = key.split("|");
        return { data: { id: `s-${key}`, source, target, kind: "spouse" } };
      }),
      ...[...siblingEdges].map((key) => {
        const [source, target] = key.split("|");
        return { data: { id: `sib-${key}`, source, target, kind: "sibling" } };
      }),
    ];

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: "node",
          style: {
            "background-color": pantheon.colorTheme.primary,
            label: "data(label)",
            color: "#f2e4c4",
            "font-family": "Cinzel, serif",
            "font-size": 11,
            "text-valign": "bottom",
            "text-margin-y": 6,
            width: 26,
            height: 26,
            "border-width": 2,
            "border-color": "#c9a24b",
          },
        },
        {
          selector: "edge[kind='parent']",
          style: {
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "target-arrow-color": "#c9a24b",
            "line-color": "#c9a24b",
            width: 1.6,
          },
        },
        {
          selector: "edge[kind='spouse']",
          style: {
            "curve-style": "bezier",
            "line-color": pantheon.colorTheme.accent,
            "line-style": "dashed",
            width: 1.6,
          },
        },
        {
          selector: "edge[kind='sibling']",
          style: {
            "curve-style": "bezier",
            "line-color": "#7a6647",
            "line-style": "dotted",
            width: 1.2,
          },
        },
      ],
      layout: { name: "cose", animate: false, padding: 24 },
      minZoom: 0.4,
      maxZoom: 2.5,
      wheelSensitivity: 0.2,
    });

    cy.on("tap", "node", (evt) => {
      navigate(`/god/${evt.target.id()}`);
    });

    cyRef.current = cy;

    return () => {
      cy.destroy();
      cyRef.current = null;
    };
  }, [pantheon, navigate]);

  return (
    <div className="family-graph-wrap">
      <div ref={containerRef} className="family-graph" />
      <div className="family-graph__legend">
        <span>
          <i className="legend-swatch legend-swatch--parent" /> parent → child
        </span>
        <span>
          <i className="legend-swatch legend-swatch--spouse" /> spouses
        </span>
        <span>
          <i className="legend-swatch legend-swatch--sibling" /> siblings
        </span>
      </div>
    </div>
  );
}
