import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { GodLookup } from "../../data/pantheons";
import { getGodById } from "../../data/pantheons";
import "./GodDetail.css";

interface GodDetailProps {
  lookup: GodLookup;
}

const FAMILY_LABELS: Record<string, string> = {
  parents: "Parent",
  spouses: "Spouse",
  children: "Child",
  siblings: "Sibling",
};

export function GodDetail({ lookup }: GodDetailProps) {
  const { god, pantheon } = lookup;

  const themeStyle = {
    "--pantheon-primary": pantheon.colorTheme.primary,
    "--pantheon-secondary": pantheon.colorTheme.secondary,
    "--pantheon-accent": pantheon.colorTheme.accent,
  } as CSSProperties;

  const familyEntries = (["parents", "spouses", "children", "siblings"] as const).flatMap(
    (relation) => {
      const ids = god.family?.[relation] ?? [];
      return ids
        .map((id) => getGodById(id))
        .filter((entry): entry is GodLookup => Boolean(entry))
        .map((entry) => ({ relation, entry }));
    },
  );

  return (
    <div className="god-detail" style={themeStyle}>
      <div className="god-detail__panel illuminated-panel parchment-texture">
        <Link to={`/pantheon/${pantheon.id}`} className="god-detail__back">
          &larr; Back to {pantheon.name}
        </Link>

        <h1>{god.name}</h1>
        {god.akas && god.akas.length > 0 && (
          <p className="god-detail__akas">also known as {god.akas.join(", ")}</p>
        )}

        <p className="god-detail__domains">{god.domains.join(" · ")}</p>

        {god.symbols && god.symbols.length > 0 && (
          <p className="god-detail__symbols">
            <strong>Symbols:</strong> {god.symbols.join(", ")}
          </p>
        )}

        <hr className="gold-divider" />

        <p className="god-detail__bio">{god.bio}</p>

        {familyEntries.length > 0 && (
          <>
            <hr className="gold-divider" />
            <h3>Family</h3>
            <div className="god-detail__family">
              {familyEntries.map(({ relation, entry }) => (
                <Link key={relation + entry.god.id} to={`/god/${entry.god.id}`} className="family-pill">
                  <span className="family-pill__relation">{FAMILY_LABELS[relation]}</span>
                  <span className="family-pill__name">{entry.god.name}</span>
                  {entry.pantheon.id !== pantheon.id && (
                    <span className="family-pill__pantheon">{entry.pantheon.name}</span>
                  )}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
