import { lazy, Suspense, useState } from "react";
import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import type { Pantheon } from "../../types/mythology";
import { landmarkIcons } from "../WorldMap/LandmarkIcons";
import "./PantheonCodex.css";

const FamilyGraph = lazy(() =>
  import("../FamilyGraph/FamilyGraph").then((m) => ({ default: m.FamilyGraph })),
);

interface PantheonCodexProps {
  pantheon: Pantheon;
}

export function PantheonCodex({ pantheon }: PantheonCodexProps) {
  const [showGraph, setShowGraph] = useState(false);
  const themeStyle = {
    "--pantheon-primary": pantheon.colorTheme.primary,
    "--pantheon-secondary": pantheon.colorTheme.secondary,
    "--pantheon-accent": pantheon.colorTheme.accent,
  } as CSSProperties;
  const LandmarkIcon = landmarkIcons[pantheon.id];

  return (
    <div className="codex" style={themeStyle}>
      <div className="codex__hero">
        <Link to="/" className="codex__back">
          &larr; Back to the map
        </Link>
        {LandmarkIcon && (
          <div className="codex__landmark-icon">
            <LandmarkIcon />
          </div>
        )}
        <h1>{pantheon.name}</h1>
        <h2>{pantheon.landmarkName}</h2>
        <p className="codex__landmark-blurb">{pantheon.landmarkBlurb}</p>
      </div>

      <div className="codex__body illuminated-panel parchment-texture">
        <p className="codex__intro">{pantheon.intro}</p>

        {pantheon.note && <p className="codex__note">{pantheon.note}</p>}

        <hr className="gold-divider" />

        <div className="codex__roster-header">
          <h3 className="codex__roster-heading">The Pantheon</h3>
          <button type="button" className="codex__graph-toggle" onClick={() => setShowGraph((v) => !v)}>
            {showGraph ? "Hide Family Tree" : "View Family Tree"}
          </button>
        </div>

        {showGraph && (
          <Suspense fallback={<div className="codex__graph-loading">Loading family tree…</div>}>
            <FamilyGraph pantheon={pantheon} />
          </Suspense>
        )}

        <div className="codex__grid">
          {pantheon.gods.map((god) => (
            <Link key={god.id} to={`/god/${god.id}`} className="god-card">
              <h4>{god.name}</h4>
              <p className="god-card__domains">{god.domains.join(" · ")}</p>
              <p className="god-card__bio">{god.bio}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
