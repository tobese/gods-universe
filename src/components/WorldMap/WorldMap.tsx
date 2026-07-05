import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { pantheons } from "../../data/pantheons";
import { useMapPanZoom } from "./useMapPanZoom";
import { landmarkIcons } from "./LandmarkIcons";
import "./WorldMap.css";

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
              <radialGradient id="ocean-glow" cx="50%" cy="35%" r="75%">
                <stop offset="0%" stopColor="#2b5468" />
                <stop offset="100%" stopColor="#0d1f2b" />
              </radialGradient>
              {pantheons.map((p) => (
                <radialGradient key={p.id} id={`region-glow-${p.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={p.colorTheme.primary} stopOpacity="0.65" />
                  <stop offset="100%" stopColor={p.colorTheme.primary} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect x="0" y="0" width="100" height="100" fill="url(#ocean-glow)" />

            {/* faint parallel / meridian lines for an old-atlas feel */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`lat-${i}`}
                x1="0"
                y1={(i + 1) * 10}
                x2="100"
                y2={(i + 1) * 10}
                stroke="rgba(233, 200, 115, 0.06)"
                strokeWidth="0.15"
              />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
              <line
                key={`lon-${i}`}
                x1={(i + 1) * 8.33}
                y1="0"
                x2={(i + 1) * 8.33}
                y2="100"
                stroke="rgba(233, 200, 115, 0.06)"
                strokeWidth="0.15"
              />
            ))}

            {/* stylized low-poly landmasses */}
            <g className="landmasses">
              <polygon points="6,10 14,8 22,9 28,12 33,18 30,24 34,28 31,33 34,37 30,40 26,43 28,47 23,46 18,44 14,40 10,34 7,28 9,22 5,17" />
              <polygon points="20,48 27,47 33,50 36,56 34,62 36,68 31,74 26,73 23,68 25,62 21,58 23,53" />
              <polygon points="40,14 46,10 54,8 62,7 70,8 78,10 85,13 91,17 95,22 93,27 96,31 93,35 90,32 87,37 84,34 80,40 76,36 72,42 68,38 64,42 60,38 58,44 54,40 56,34 52,36 48,32 50,26 45,28 42,24 44,19" />
              <polygon points="80,60 86,58 92,60 95,65 93,70 87,72 81,70 78,65" />
            </g>

            {/* soft region-color glow, one per pantheon */}
            {pantheons.map((p) => (
              <circle
                key={p.id}
                cx={p.mapPosition.x}
                cy={p.mapPosition.y}
                r="10"
                fill={`url(#region-glow-${p.id})`}
              />
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
