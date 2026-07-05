import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { pantheons } from "../../data/pantheons";
import { seaMyths } from "../../data/seaMyths";
import { useMapPanZoom } from "./useMapPanZoom";
import { landmarkIcons } from "./LandmarkIcons";
import { seaMythIcons } from "./SeaMythIcons";
import { CompassRose, RhumbLines, ShipDoodle } from "./MapDecorations";
import "./WorldMap.css";

const COMPASS_CENTER = { x: 13, y: 84 };

const SHIP_DOODLES = [
  { cx: 30, cy: 20, scale: 1.4, rotation: -6 },
  { cx: 62, cy: 60, scale: 1.2, rotation: 8 },
  { cx: 20, cy: 68, scale: 1.1, rotation: -4 },
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
              <radialGradient id="sea-wash" cx="50%" cy="38%" r="75%">
                <stop offset="0%" stopColor="#8fb6ab" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#4f7d78" stopOpacity="0.75" />
              </radialGradient>
              <pattern id="wave-texture" width="9" height="6" patternUnits="userSpaceOnUse">
                <path d="M0,4 Q2.25,1.5 4.5,4 T9,4" className="wave-line" />
              </pattern>
              {pantheons.map((p) => (
                <radialGradient key={p.id} id={`region-glow-${p.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={p.colorTheme.primary} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={p.colorTheme.primary} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect x="0" y="0" width="100" height="100" className="sea-base" />
            <rect x="0" y="0" width="100" height="100" fill="url(#sea-wash)" />
            <rect x="0" y="0" width="100" height="100" fill="url(#wave-texture)" opacity="0.5" />

            <RhumbLines cx={COMPASS_CENTER.x} cy={COMPASS_CENTER.y} />
            <CompassRose cx={COMPASS_CENTER.x} cy={COMPASS_CENTER.y} radius={7} />

            {/* stylized low-poly landmasses, drawn in an aged-ink style */}
            <g className="landmasses">
              <polygon points="6,10 14,8 22,9 28,12 33,18 30,24 34,28 31,33 34,37 30,40 26,43 28,47 23,46 18,44 14,40 10,34 7,28 9,22 5,17" />
              <polygon points="20,48 27,47 33,50 36,56 34,62 36,68 31,74 26,73 23,68 25,62 21,58 23,53" />
              <polygon points="40,14 46,10 54,8 62,7 70,8 78,10 85,13 91,17 95,22 93,27 96,31 93,35 90,32 87,37 84,34 80,40 76,36 72,42 68,38 64,42 60,38 58,44 54,40 56,34 52,36 48,32 50,26 45,28 42,24 44,19" />
              <polygon points="80,60 86,58 92,60 95,65 93,70 87,72 81,70 78,65" />
            </g>

            {/* soft region-color tint, one per pantheon */}
            {pantheons.map((p) => (
              <circle
                key={p.id}
                cx={p.mapPosition.x}
                cy={p.mapPosition.y}
                r="10"
                fill={`url(#region-glow-${p.id})`}
              />
            ))}

            {SHIP_DOODLES.map((ship, i) => (
              <ShipDoodle key={i} {...ship} />
            ))}
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
                <span className="sea-myth-marker__badge">
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
