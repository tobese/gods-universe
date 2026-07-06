function polarToXY(cx: number, cy: number, angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.sin(rad), y: cy - radius * Math.cos(rad) };
}

interface CompassRoseProps {
  cx: number;
  cy: number;
  radius?: number;
}

/**
 * Ornate 16-point rose in the style of 16th-century portolan charts:
 * split-shaded points, a ticked outer ring, and a fleur-de-lis in place
 * of the north label. Render inside an un-stretched square SVG so the
 * rings stay circular (the map background SVG is stretched 2:1).
 */
export function CompassRose({ cx, cy, radius = 30 }: CompassRoseProps) {
  const splitPoint = (angle: number, len: number, halfWidth: number) => {
    const tip = polarToXY(cx, cy, angle, len);
    const left = polarToXY(cx, cy, angle - 90, halfWidth);
    const right = polarToXY(cx, cy, angle + 90, halfWidth);
    return {
      dark: `${tip.x},${tip.y} ${left.x},${left.y} ${cx},${cy}`,
      light: `${tip.x},${tip.y} ${right.x},${right.y} ${cx},${cy}`,
    };
  };

  const cardinals = [0, 90, 180, 270].map((a) => splitPoint(a, radius * 0.92, radius * 0.13));
  const ordinals = [45, 135, 225, 315].map((a) => splitPoint(a, radius * 0.62, radius * 0.1));
  const halfWinds = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a) =>
    splitPoint(a, radius * 0.4, radius * 0.065),
  );

  const ticks = Array.from({ length: 32 }, (_, i) => {
    const angle = i * 11.25;
    const isMajor = i % 4 === 0;
    const inner = polarToXY(cx, cy, angle, radius * (isMajor ? 0.96 : 1.0));
    const outer = polarToXY(cx, cy, angle, radius * 1.08);
    return (
      <line
        key={angle}
        x1={inner.x}
        y1={inner.y}
        x2={outer.x}
        y2={outer.y}
        className={isMajor ? "compass-rose__tick compass-rose__tick--major" : "compass-rose__tick"}
      />
    );
  });

  const diamonds = [45, 135, 225, 315].map((a) => {
    const c = polarToXY(cx, cy, a, radius * 1.04);
    const s = radius * 0.045;
    return (
      <polygon
        key={a}
        points={`${c.x},${c.y - s} ${c.x + s},${c.y} ${c.x},${c.y + s} ${c.x - s},${c.y}`}
        className="compass-rose__diamond"
      />
    );
  });

  const e = polarToXY(cx, cy, 90, radius * 1.24);
  const s = polarToXY(cx, cy, 180, radius * 1.26);
  const w = polarToXY(cx, cy, 270, radius * 1.24);
  const fleur = polarToXY(cx, cy, 0, radius * 1.26);
  const fleurScale = radius / 34;

  return (
    <g className="compass-rose">
      <circle cx={cx} cy={cy} r={radius * 1.08} className="compass-rose__ring" />
      <circle cx={cx} cy={cy} r={radius * 0.96} className="compass-rose__ring" />
      <circle cx={cx} cy={cy} r={radius * 1.02} className="compass-rose__ring compass-rose__ring--band" />
      {ticks}
      {diamonds}
      <circle cx={cx} cy={cy} r={radius * 0.44} className="compass-rose__ring compass-rose__ring--inner" />
      {halfWinds.map((p, i) => (
        <g key={`h${i}`}>
          <polygon points={p.dark} className="compass-rose__point-dark" />
          <polygon points={p.light} className="compass-rose__point-light" />
        </g>
      ))}
      {ordinals.map((p, i) => (
        <g key={`o${i}`}>
          <polygon points={p.dark} className="compass-rose__point-dark" />
          <polygon points={p.light} className="compass-rose__point-light" />
        </g>
      ))}
      {cardinals.map((p, i) => (
        <g key={`c${i}`}>
          <polygon points={p.dark} className="compass-rose__point-dark" />
          <polygon points={p.light} className="compass-rose__point-light" />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={radius * 0.1} className="compass-rose__hub" />
      <circle cx={cx} cy={cy} r={radius * 0.045} className="compass-rose__hub-dot" />
      {/* fleur-de-lis marks north, as on period charts */}
      <g transform={`translate(${fleur.x},${fleur.y - 4 * fleurScale}) scale(${fleurScale})`}>
        <path
          className="compass-rose__fleur"
          d="M0,-7 C1.6,-4.6 1.9,-2.6 0.9,-1 L0.9,0.6 C3,-0.8 4.7,-0.5 5.2,1.1 C5.5,2.5 4.2,3.4 2.8,3.1 C3.6,3.9 3.3,4.8 2.2,4.8 L0.9,4.8 L0.9,6.2 L-0.9,6.2 L-0.9,4.8 L-2.2,4.8 C-3.3,4.8 -3.6,3.9 -2.8,3.1 C-4.2,3.4 -5.5,2.5 -5.2,1.1 C-4.7,-0.5 -3,-0.8 -0.9,0.6 L-0.9,-1 C-1.9,-2.6 -1.6,-4.6 0,-7 Z"
        />
        <rect x="-2.6" y="3.4" width="5.2" height="1" className="compass-rose__fleur" />
      </g>
      <text x={e.x + 2} y={e.y + 2} textAnchor="middle" className="compass-rose__label">
        E
      </text>
      <text x={s.x} y={s.y + 5} textAnchor="middle" className="compass-rose__label">
        S
      </text>
      <text x={w.x - 2} y={w.y + 2} textAnchor="middle" className="compass-rose__label">
        W
      </text>
    </g>
  );
}

interface RhumbLinesProps {
  cx: number;
  cy: number;
  length?: number;
}

export function RhumbLines({ cx, cy, length = 150 }: RhumbLinesProps) {
  const lines = Array.from({ length: 16 }, (_, i) => {
    const angle = i * 22.5;
    const far = polarToXY(cx, cy, angle, length);
    return <line key={angle} x1={cx} y1={cy} x2={far.x} y2={far.y} className="rhumb-line" />;
  });
  return <g className="rhumb-lines">{lines}</g>;
}

/**
 * Parchment sheet frame: torn deckled edges, scorched border, aging
 * vignette, and two curled corners. Rendered over the viewport (it does
 * not pan or zoom) with pointer-events disabled.
 */
const FRAME_W = 1600;
const FRAME_H = 900;

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function tornEdgePath(inset: number, step: number, jitter: number, seed: number) {
  const rand = mulberry32(seed);
  const j = (m = 1) => (rand() - 0.5) * 2 * jitter * m;
  const crag = () => (rand() > 0.78 ? (rand() > 0.5 ? -1 : 1) * (6 + rand() * 20) : 0);
  const pts: string[] = [];
  for (let x = inset; x <= FRAME_W - inset; x += step + (rand() > 0.7 ? rand() * step : 0)) {
    const c = crag();
    pts.push(`${x + j(1.2) + c},${inset + j(1.3) + Math.abs(c) * 0.35}`);
  }
  for (let y = inset; y <= FRAME_H - inset; y += step + (rand() > 0.7 ? rand() * step : 0)) {
    const c = crag();
    pts.push(`${FRAME_W - inset + j(1.2) - Math.abs(c) * 0.35},${y + j(1.3) + c}`);
  }
  for (let x = FRAME_W - inset; x >= inset; x -= step + (rand() > 0.7 ? rand() * step : 0)) {
    const c = crag();
    pts.push(`${x + j(1.2) + c},${FRAME_H - inset + j(1.3) - Math.abs(c) * 0.35}`);
  }
  for (let y = FRAME_H - inset; y >= inset; y -= step + (rand() > 0.7 ? rand() * step : 0)) {
    const c = crag();
    pts.push(`${inset + j(1.2) - Math.abs(c) * 0.35},${y + j(1.3) + c}`);
  }
  return `M${pts.join("L")}Z`;
}

const TORN_EDGE = tornEdgePath(20, 28, 18, 1988);

export function ParchmentFrame() {
  return (
    <svg
      className="parchment-frame"
      viewBox={`0 0 ${FRAME_W} ${FRAME_H}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="frame-vignette" cx="50%" cy="50%" r="72%">
          <stop offset="0%" stopColor="#3a2410" stopOpacity="0" />
          <stop offset="62%" stopColor="#3a2410" stopOpacity="0" />
          <stop offset="88%" stopColor="#4a2f14" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2e1c0a" stopOpacity="0.42" />
        </radialGradient>
        <linearGradient id="curl-bl" x1="0" y1="1" x2="0.7" y2="0.2">
          <stop offset="0%" stopColor="#a8895c" />
          <stop offset="55%" stopColor="#dcc394" />
          <stop offset="100%" stopColor="#f6e9c8" />
        </linearGradient>
        <linearGradient id="curl-tr" x1="1" y1="0" x2="0.3" y2="0.8">
          <stop offset="0%" stopColor="#a8895c" />
          <stop offset="55%" stopColor="#dcc394" />
          <stop offset="100%" stopColor="#f6e9c8" />
        </linearGradient>
        <filter id="curl-shadow-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <rect x="0" y="0" width={FRAME_W} height={FRAME_H} fill="url(#frame-vignette)" />

      {/* scorched sepia halo hugging the torn edge (outer half hidden by the void fill) */}
      <path d={TORN_EDGE} className="frame-burn frame-burn--wide" />
      <path d={TORN_EDGE} className="frame-burn" />

      {/* everything beyond the torn edge shows the page behind the sheet */}
      <path
        d={`M0,0H${FRAME_W}V${FRAME_H}H0Z ${TORN_EDGE}`}
        fillRule="evenodd"
        className="frame-void"
      />

      {/* bottom-left corner, curling up */}
      <path d="M20,788 L20,882 L150,882 Z" className="frame-void" />
      <path
        d="M24,792 Q104,812 146,878"
        className="curl-shadow"
        filter="url(#curl-shadow-blur)"
      />
      <path d="M20,788 Q108.6,802.6 150,882 Q92.7,824.5 20,788 Z" fill="url(#curl-bl)" className="curl-flap" />

      {/* top-right corner, smaller curl */}
      <path d="M1466,18 L1582,18 L1582,122 Z" className="frame-void" />
      <path d="M1470,22 Q1504,90 1578,118" className="curl-shadow" filter="url(#curl-shadow-blur)" />
      <path d="M1466,18 Q1500,96.8 1582,122 Q1516,78.9 1466,18 Z" fill="url(#curl-tr)" className="curl-flap" />
    </svg>
  );
}
