function polarToXY(cx: number, cy: number, angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.sin(rad), y: cy - radius * Math.cos(rad) };
}

interface CompassRoseProps {
  cx: number;
  cy: number;
  radius?: number;
}

export function CompassRose({ cx, cy, radius = 7 }: CompassRoseProps) {
  const tipRadii = [radius, radius * 0.65, radius, radius * 0.65, radius, radius * 0.65, radius, radius * 0.65];
  const valleyRadius = radius * 0.22;
  const points: string[] = [];
  for (let i = 0; i < 8; i++) {
    const tipAngle = i * 45;
    const tip = polarToXY(cx, cy, tipAngle, tipRadii[i]);
    points.push(`${tip.x},${tip.y}`);
    const valley = polarToXY(cx, cy, tipAngle + 22.5, valleyRadius);
    points.push(`${valley.x},${valley.y}`);
  }

  const n = polarToXY(cx, cy, 0, radius * 1.32);
  const e = polarToXY(cx, cy, 90, radius * 1.28);
  const s = polarToXY(cx, cy, 180, radius * 1.32);
  const w = polarToXY(cx, cy, 270, radius * 1.28);

  return (
    <g className="compass-rose">
      <circle cx={cx} cy={cy} r={radius * 1.08} className="compass-rose__ring" />
      <circle cx={cx} cy={cy} r={radius * 0.9} className="compass-rose__ring compass-rose__ring--inner" />
      <polygon points={points.join(" ")} className="compass-rose__star" />
      <circle cx={cx} cy={cy} r={radius * 0.14} className="compass-rose__hub" />
      <text x={n.x} y={n.y} textAnchor="middle" className="compass-rose__label">
        N
      </text>
      <text x={e.x} y={e.y + 0.9} textAnchor="middle" className="compass-rose__label">
        E
      </text>
      <text x={s.x} y={s.y + 1.6} textAnchor="middle" className="compass-rose__label">
        S
      </text>
      <text x={w.x} y={w.y + 0.9} textAnchor="middle" className="compass-rose__label">
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

interface ShipDoodleProps {
  cx: number;
  cy: number;
  scale?: number;
  rotation?: number;
}

export function ShipDoodle({ cx, cy, scale = 1, rotation = 0 }: ShipDoodleProps) {
  return (
    <g transform={`translate(${cx},${cy}) rotate(${rotation}) scale(${scale})`} className="ship-doodle">
      <path d="M -5,3.2 Q 0,6 5,3.2 L 4,4.6 L -4,4.6 Z" className="ship-doodle__hull" />
      <line x1="0" y1="3.2" x2="0" y2="-5.5" className="ship-doodle__mast" />
      <path d="M 0.3,-5.2 L 4,1.6 L 0.3,2.4 Z" className="ship-doodle__sail" />
      <path d="M -0.3,-4.6 L -3,1.2 L -0.3,1.8 Z" className="ship-doodle__sail" />
    </g>
  );
}
