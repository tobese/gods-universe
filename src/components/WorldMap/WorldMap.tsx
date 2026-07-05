import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { pantheons } from "../../data/pantheons";
import { seaMyths } from "../../data/seaMyths";
import { useMapPanZoom } from "./useMapPanZoom";
import { landmarkIcons } from "./LandmarkIcons";
import { seaMythIcons } from "./SeaMythIcons";
import { CompassRose, RhumbLines, ParchmentFrame } from "./MapDecorations";
import { LAND_PATH } from "./landPaths";
import "./WorldMap.css";

const COMPASS_CENTER = { x: 13, y: 84 };

/* Period ocean names, lettered the way old charts labelled open water. */
const SEA_LABELS = [
  { text: "Mare Pacificum", x: 12, y: 33, rotate: -4 },
  { text: "Oceanus Atlanticus", x: 38, y: 47, rotate: -12 },
  { text: "Oceanus Indicus", x: 66, y: 56, rotate: 5 },
  { text: "Terra Australis Incognita", x: 50, y: 93, rotate: 0 },
];

export function WorldMap() {
  const { containerRef, transform, handlers, resetView, zoomBy } = useMapPanZoom();

  return (
    <div className="world-map-shell">
      <div
        ref={containerRef}
        className="map-viewport"
        onWheel={handlers.onWheel}
        onPointerDown={handlers.onPointerDown}
        onPointerMove={handlers.onPointerMove}
        onPointerUp={handlers.onPointerUp}
        onPointerLeave={handlers.onPointerUp}
      >
        <div
          className="map-surface"
          style={{
            transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          }}
        >
          <svg
            className="map-background"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="sea-wash" cx="50%" cy="42%" r="80%">
                <stop offset="0%" stopColor="#ecdab2" />
                <stop offset="60%" stopColor="#e3cda2" />
                <stop offset="100%" stopColor="#d2b382" />
              </radialGradient>
              <pattern id="wave-texture" width="18" height="12" patternUnits="userSpaceOnUse">
                <path d="M1,3 q1.6,-1.3 3.2,0 q1.6,1.3 3.2,0" className="wave-line" />
                <path d="M10,9 q1.6,-1.3 3.2,0 q1.6,1.3 3.2,0" className="wave-line" />
              </pattern>
              {/* mottled foxing that makes the sheet read as aged vellum */}
              <filter id="parchment-mottle" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05 0.08" numOctaves="3" seed="11" result="noise" />
                <feColorMatrix
                  in="noise"
                  type="matrix"
                  values="0 0 0 0 0.42  0 0 0 0 0.30  0 0 0 0 0.13  0.9 0.9 0 0 -0.9"
                />
              </filter>
              {/* slight wobble so the coastline reads as hand-inked */}
              <filter id="hand-inked" x="-3%" y="-3%" width="106%" height="106%">
                <feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="2" seed="4" result="wobble" />
                <feDisplacementMap in="SourceGraphic" in2="wobble" scale="0.7" />
              </filter>
              {pantheons.map((p) => (
                <radialGradient key={p.id} id={`region-glow-${p.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={p.colorTheme.primary} stopOpacity="0.32" />
                  <stop offset="100%" stopColor={p.colorTheme.primary} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect x="0" y="0" width="100" height="100" fill="url(#sea-wash)" />
            <rect x="0" y="0" width="100" height="100" filter="url(#parchment-mottle)" opacity="0.14" />
            <rect x="0" y="0" width="100" height="100" fill="url(#wave-texture)" opacity="0.45" />

            <RhumbLines cx={COMPASS_CENTER.x} cy={COMPASS_CENTER.y} />

            {/* real coastlines (Natural Earth), engraved-chart treatment:
                graded coastal shading under a hand-inked outline */}
            <g filter="url(#hand-inked)">
              <path d={LAND_PATH} className="coast-shade coast-shade--far" />
              <path d={LAND_PATH} className="coast-shade coast-shade--mid" />
              <path d={LAND_PATH} className="coast-shade coast-shade--near" />
              <path d={LAND_PATH} className="landmass" />
            </g>

            {/* soft region-color tint, one per pantheon */}
            {pantheons.map((p) => (
              <circle
                key={p.id}
                cx={p.mapPosition.x}
                cy={p.mapPosition.y}
                r="9"
                fill={`url(#region-glow-${p.id})`}
              />
            ))}
          </svg>

          {SEA_LABELS.map((label) => (
            <span
              key={label.text}
              className="sea-label"
              style={{
                left: `${label.x}%`,
                top: `${label.y}%`,
                transform: `translate(-50%, -50%) rotate(${label.rotate}deg)`,
              }}
              aria-hidden="true"
            >
              {label.text}
            </span>
          ))}

          {/* compass in its own square SVG so the rings stay circular */}
          <svg
            className="compass-overlay"
            viewBox="0 0 100 100"
            style={{ left: `${COMPASS_CENTER.x}%`, top: `${COMPASS_CENTER.y}%` }}
            aria-hidden="true"
          >
            <CompassRose cx={50} cy={53} radius={31} />
          </svg>

          {pantheons.map((p) => {
            const markerStyle = {
              left: `${p.mapPosition.x}%`,
              top: `${p.mapPosition.y}%`,
              "--marker-color": p.colorTheme.accent,
            } as CSSProperties;
            const LandmarkIcon = landmarkIcons[p.id];

            return (
              <Link key={p.id} to={`/pantheon/${p.id}`} className="map-marker" style={markerStyle}>
                <span className="map-marker__badge">
                  {LandmarkIcon && <LandmarkIcon className="map-marker__icon" />}
                </span>
                <span className="map-marker__label">
                  <strong>{p.landmarkName}</strong>
                  <em>{p.culture}</em>
                </span>
              </Link>
            );
          })}

          {seaMyths.map((s) => {
            const markerStyle = {
              left: `${s.mapPosition.x}%`,
              top: `${s.mapPosition.y}%`,
            } as CSSProperties;
            const SeaMythIcon = seaMythIcons[s.id];

            return (
              <Link key={s.id} to={`/sea-myth/${s.id}`} className="sea-myth-marker" style={markerStyle}>
                <span className="sea-myth-marker__figure">
                  {SeaMythIcon && <SeaMythIcon className="sea-myth-marker__icon" />}
                </span>
                <span className="map-marker__label">
                  <strong>{s.name}</strong>
                  <em>{s.culture}</em>
                </span>
              </Link>
            );
          })}
        </div>

        <ParchmentFrame />
      </div>

      <div className="map-controls illuminated-panel parchment-texture">
        <button type="button" onClick={() => zoomBy(1.3)} aria-label="Zoom in">
          +
        </button>
        <button type="button" onClick={() => zoomBy(1 / 1.3)} aria-label="Zoom out">
          −
        </button>
        <button type="button" onClick={resetView} aria-label="Reset view">
          ⟲
        </button>
      </div>
    </div>
  );
}
