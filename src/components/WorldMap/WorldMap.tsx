import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { pantheons } from "../../data/pantheons";
import { useMapPanZoom } from "./useMapPanZoom";
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
              <filter id="blob-blur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4.5" />
              </filter>
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
                stroke="rgba(233, 200, 115, 0.08)"
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
                stroke="rgba(233, 200, 115, 0.08)"
                strokeWidth="0.15"
              />
            ))}

            {/* soft watercolor-style region blobs, one per pantheon */}
            {pantheons.map((p) => (
              <circle
                key={p.id}
                cx={p.mapPosition.x}
                cy={p.mapPosition.y}
                r="9"
                fill={p.colorTheme.primary}
                opacity="0.35"
                filter="url(#blob-blur)"
              />
            ))}
          </svg>

          {pantheons.map((p) => {
            const markerStyle = {
              left: `${p.mapPosition.x}%`,
              top: `${p.mapPosition.y}%`,
              "--marker-color": p.colorTheme.accent,
            } as CSSProperties;

            return (
              <Link key={p.id} to={`/pantheon/${p.id}`} className="map-marker" style={markerStyle}>
                <span className="map-marker__dot" />
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
