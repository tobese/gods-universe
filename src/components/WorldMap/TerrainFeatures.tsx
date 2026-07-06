/**
 * Hand-drawn terrain in the style of Tolkien's Wilderland / Thror's map:
 * mountain chains as rows of shaded peaks (snow-capped where they always are),
 * rivers as meandering ink lines, rainforests as clustered palms, dry forests
 * as rounded tree glyphs, deserts as stipple dots and dunes, and pale ice
 * sheets over Greenland and Antarctica.
 * Positions are loosely based on real geography (same equirectangular
 * 0-100 space as landPaths.ts) but tuned for looks, not accuracy.
 */
import { LAND_PATH } from "./landPaths";

/* The background SVG (viewBox 100x100) is stretched to roughly 16:9, so
   one x-unit displays ~1.78x wider than one y-unit. AX converts a length
   in y-units to the x-units that display at the same size. */
const AX = 9 / 16;

const f = (n: number) => +n.toFixed(2);

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

type Pt = [number, number];

/* Point at fraction t of a polyline's display length. */
function pointAt(pts: Pt[], t: number) {
  const segs: number[] = [];
  let total = 0;
  for (let i = 0; i < pts.length - 1; i++) {
    const len = Math.hypot((pts[i + 1][0] - pts[i][0]) / AX, pts[i + 1][1] - pts[i][1]);
    segs.push(len);
    total += len;
  }
  let d = t * total;
  for (let i = 0; i < segs.length; i++) {
    if (d <= segs[i] || i === segs.length - 1) {
      const fr = segs[i] === 0 ? 0 : d / segs[i];
      return {
        x: pts[i][0] + (pts[i + 1][0] - pts[i][0]) * fr,
        y: pts[i][1] + (pts[i + 1][1] - pts[i][1]) * fr,
      };
    }
    d -= segs[i];
  }
  return { x: pts[pts.length - 1][0], y: pts[pts.length - 1][1] };
}

/* ---------------------------------- mountains --------------------------- */

interface Chain {
  id: string;
  pts: Pt[];
  n: number;
  h: [number, number];
  seed: number;
  /** optional second row of smaller peaks drawn behind/beside the main row */
  back?: { dx: number; dy: number; n: number; s: number };
}

/* Peaks taller than this (in y-units) carry permanent snow. Tuned so the
   great ranges — Himalaya, Andes, Alps, Rockies, Tian Shan — get caps while
   low ranges (Urals, Great Dividing) stay bare. */
const SNOW_H = 1.25;

const CHAINS: Chain[] = [
  { id: "rockies", pts: [[16.2, 18], [17.6, 22], [19.6, 27], [21.2, 30.8]], n: 17, h: [1.3, 2.2], seed: 101, back: { dx: -0.55, dy: -0.5, n: 12, s: 0.78 } },
  { id: "andes", pts: [[30.9, 45.8], [28.6, 49.5], [29.3, 55.5], [31.3, 60.5], [30.6, 65.5], [30.1, 72], [29.7, 77.5]], n: 26, h: [1.3, 2.4], seed: 102, back: { dx: 0.5, dy: 0.3, n: 16, s: 0.72 } },
  { id: "scandes", pts: [[55.0, 12.3], [53.5, 14.2], [52.4, 16.2]], n: 10, h: [0.8, 1.2], seed: 103 },
  { id: "alps", pts: [[51.6, 24.6], [53.0, 24.2], [54.3, 24.4]], n: 9, h: [1.1, 1.7], seed: 104 },
  { id: "urals", pts: [[66.3, 14.5], [66.5, 18.5], [66.8, 22.3]], n: 11, h: [0.7, 1.0], seed: 105 },
  { id: "atlas", pts: [[48.2, 32.2], [50.0, 31.6], [52.0, 31.2]], n: 10, h: [0.8, 1.15], seed: 106 },
  { id: "himalaya", pts: [[69.4, 30.2], [71.3, 32.3], [73.4, 34.0], [75.3, 34.0], [76.6, 33.4]], n: 24, h: [2.2, 3.5], seed: 107, back: { dx: 0.3, dy: -1.1, n: 15, s: 0.72 } },
  { id: "tianshan", pts: [[72.0, 26.6], [74.5, 25.8]], n: 9, h: [1.2, 1.8], seed: 108 },
  { id: "dividing", pts: [[90.3, 58.5], [91.3, 62.5], [91.5, 66.5], [90.9, 70]], n: 12, h: [0.7, 1.0], seed: 109 },
];

interface Peak {
  x: number;
  y: number;
  h: number;
}

function chainPeaks(c: Chain): Peak[] {
  const rand = mulberry32(c.seed);
  const out: Peak[] = [];
  const make = (n: number, dx: number, dy: number, s: number) => {
    for (let i = 0; i < n; i++) {
      const p = pointAt(c.pts, (i + 0.5) / n);
      out.push({
        /* smaller jitter than before keeps peaks overlapping into a
           continuous ridge instead of a scattered row */
        x: p.x + dx + (rand() - 0.5) * 0.35 * AX,
        y: p.y + dy + (rand() - 0.5) * 0.3,
        h: (c.h[0] + rand() * (c.h[1] - c.h[0])) * s,
      });
    }
  };
  if (c.back) make(c.back.n, c.back.dx, c.back.dy, c.back.s);
  make(c.n, 0, 0, 1);
  /* draw north-to-south so nearer peaks overlap the ones behind */
  return out.sort((a, b) => a.y - b.y);
}

const ALL_PEAKS = CHAINS.flatMap((c) =>
  chainPeaks(c).map((p, i) => ({ ...p, key: `${c.id}-${i}` })),
);

function peakBody(p: Peak) {
  const w = p.h * 0.66 * AX;
  const { x, y, h } = p;
  return `M${f(x - w)},${f(y)} Q${f(x - w * 0.3)},${f(y - h * 0.58)} ${f(x)},${f(y - h)} Q${f(x + w * 0.3)},${f(y - h * 0.58)} ${f(x + w)},${f(y)} Z`;
}

function peakShade(p: Peak) {
  const w = p.h * 0.66 * AX;
  const { x, y, h } = p;
  return `M${f(x)},${f(y - h)} Q${f(x + w * 0.3)},${f(y - h * 0.58)} ${f(x + w)},${f(y)} L${f(x + w * 0.45)},${f(y)} Q${f(x + w * 0.14)},${f(y - h * 0.5)} ${f(x)},${f(y - h)} Z`;
}

/* A ragged cap over the top ~third of tall peaks, following the silhouette
   and dropping to a slightly wavy snow line. */
function peakSnow(p: Peak) {
  const w = p.h * 0.66 * AX;
  const { x, y, h } = p;
  const sx = w * 0.32; // half-width at the snow line
  const sy = y - h * 0.62; // snow line height
  return (
    `M${f(x)},${f(y - h)} ` +
    `Q${f(x - sx * 0.55)},${f(y - h * 0.82)} ${f(x - sx)},${f(sy)} ` +
    `Q${f(x - sx * 0.45)},${f(sy + 0.11)} ${f(x)},${f(sy - 0.05)} ` +
    `Q${f(x + sx * 0.45)},${f(sy + 0.11)} ${f(x + sx)},${f(sy)} ` +
    `Q${f(x + sx * 0.55)},${f(y - h * 0.82)} ${f(x)},${f(y - h)} Z`
  );
}

/* ----------------------------------- lakes ------------------------------ */

/* Blobby hand-inked lake shapes; rivers are drawn on top so sources meet
   their lakes (Nile-Victoria, Lena-Baikal, Volga-Caspian, Congo-Tanganyika). */
const LAKES = [
  { id: "superior", d: "M25,23.7 Q25.4,23.1 26,23.2 Q26.7,23.2 26.9,23.6 Q26.6,24 26,23.9 Q25.4,24.1 25,23.7 Z" },
  { id: "michigan", d: "M26.35,24.6 Q26.6,24.5 26.65,25.2 Q26.7,25.9 26.45,26 Q26.2,25.9 26.2,25.2 Q26.2,24.7 26.35,24.6 Z" },
  { id: "huron", d: "M27,24.7 Q27.4,24.6 27.5,25.1 Q27.55,25.5 27.25,25.6 Q26.95,25.5 26.9,25.1 Q26.9,24.8 27,24.7 Z" },
  { id: "erie", d: "M27.5,26.3 Q27.9,26 28.2,25.9 Q28.35,26 28.1,26.2 Q27.8,26.5 27.55,26.55 Z" },
  { id: "ontario", d: "M28.3,25.6 Q28.6,25.45 28.8,25.55 Q28.7,25.8 28.4,25.85 Q28.25,25.75 28.3,25.6 Z" },
  { id: "great-bear", d: "M16.2,13 Q16.8,12.8 17,13.3 Q16.9,13.8 16.4,13.9 Q16,13.6 16.2,13 Z" },
  { id: "great-slave", d: "M17.9,15.3 Q18.5,15.1 18.7,15.5 Q18.4,15.8 17.9,15.9 Q17.7,15.6 17.9,15.3 Z" },
  { id: "winnipeg", d: "M22.55,20.3 Q22.85,20.4 22.85,21.1 Q22.9,21.7 22.65,21.8 Q22.45,21.6 22.5,21 Q22.45,20.5 22.55,20.3 Z" },
  { id: "ladoga", d: "M58.6,15.8 Q59,15.7 59.1,16.1 Q59,16.5 58.65,16.45 Q58.45,16.2 58.6,15.8 Z" },
  { id: "caspian", d: "M63.5,23.8 Q64.3,23.9 64.6,24.8 Q64.8,25.7 64.4,26.5 Q64.1,27.2 64.3,28.2 Q64.4,29.2 63.9,29.6 Q63.5,29.4 63.55,28.5 Q63.6,27.5 63.3,26.6 Q63,25.5 63.1,24.5 Q63.2,23.8 63.5,23.8 Z" },
  { id: "aral", d: "M66.35,24.6 Q66.9,24.45 67,25 Q66.95,25.6 66.5,25.6 Q66.15,25.3 66.35,24.6 Z" },
  { id: "chad", d: "M53.7,42.5 Q54.1,42.4 54.2,42.8 Q54.1,43.2 53.75,43.15 Q53.5,42.9 53.7,42.5 Z" },
  { id: "victoria", d: "M58.9,50.2 Q59.5,50 59.7,50.6 Q59.7,51.3 59.2,51.4 Q58.8,51.2 58.8,50.7 Q58.8,50.4 58.9,50.2 Z" },
  { id: "tanganyika", d: "M58.15,51.9 Q58.35,52 58.35,52.9 Q58.4,53.9 58.3,54.7 Q58.1,54.9 58.05,54 Q58,52.9 58.05,52.2 Q58.05,51.9 58.15,51.9 Z" },
  { id: "malawi", d: "M59.55,55.1 Q59.75,55.2 59.75,56.1 Q59.8,57 59.65,57.6 Q59.45,57.5 59.45,56.6 Q59.4,55.7 59.55,55.1 Z" },
  { id: "baikal", d: "M79.35,21.3 Q79.55,20.5 80.1,19.95 Q80.6,19.5 80.75,19.65 Q80.55,20.1 80.1,20.5 Q79.7,20.9 79.6,21.6 Q79.4,21.6 79.35,21.3 Z" },
  { id: "loch-ness", d: "M48.65,18.05 Q48.75,17.83 48.93,17.65 Q49.1,17.47 49.2,17.4 Q49.27,17.45 49.15,17.57 Q49,17.75 48.85,17.95 Q48.75,18.1 48.65,18.05 Z" },
];

/* Hic latet monstrum: a wee serpent rising from the loch — curled neck,
   two humps breaking the water, a flick of tail. Zoom in on Scotland. */
const NESSIE = [
  "M48.78,17.95 Q48.74,17.75 48.8,17.63 q0.03,-0.05 0.07,-0.02 q0.03,0.03 -0.02,0.05 q-0.03,0.02 -0.03,0.09",
  "M48.86,17.88 q0.05,-0.11 0.11,-0.03",
  "M49.01,17.74 q0.05,-0.1 0.1,-0.03",
  "M49.15,17.6 q0.04,-0.06 0.02,-0.09",
];

/* small wave strokes inside the larger lakes */
const LAKE_WAVES = [
  { x: 64.0, y: 25.3 },
  { x: 63.9, y: 27.9 },
  { x: 25.9, y: 23.55 },
  { x: 59.25, y: 50.8 },
].map((p, i) => ({
  key: `lw-${i}`,
  d: `M${f(p.x - 0.3)},${f(p.y)} q0.15,-0.14 0.3,0 q0.15,0.14 0.3,0`,
}));

/* ----------------------------------- rivers ----------------------------- */

const RIVERS = [
  { id: "mississippi", d: "M24.6,25 Q24.2,27.5 24.9,29.5 Q25.6,31.3 25.1,33.6" },
  { id: "amazon", d: "M29.5,53.5 Q31,52.5 32.5,51.8 Q34.5,50.9 36.2,50.3" },
  { id: "nile", d: "M59.6,50.4 Q60.3,46.5 59.3,43.5 Q58.3,40.5 59,37.5 Q59.6,35.5 58.7,33.4" },
  { id: "congo", d: "M57.8,51.8 Q57.4,49.2 56,48.9 Q54.4,48.7 54.3,50.8 Q54.2,52.2 53.4,53.3" },
  { id: "volga", d: "M59.8,18.4 Q61.5,19.5 61.2,21.5 Q61,23.5 63.3,24.7" },
  { id: "ganges", d: "M70.9,31.9 Q72,34.5 73.5,35.5 Q74.6,36.3 74.9,37.7" },
  { id: "yangtze", d: "M75.8,32.2 Q77.5,34.5 79.5,33.8 Q81.5,33.1 83.6,32.7" },
  { id: "lena", d: "M80.1,20 Q82.5,17.5 83.2,14.5 Q84,12 85.3,9.8" },
];

/* --------------------------------- forests ------------------------------ */

interface Grove {
  id: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  n: number;
  seed: number;
}

/* Equatorial rainforests, drawn dense with palm glyphs. */
const RAINFORESTS: Grove[] = [
  { id: "amazonia", cx: 32.5, cy: 51.5, rx: 3.2, ry: 2.8, n: 46, seed: 201 },
  { id: "congo-basin", cx: 56, cy: 51, rx: 2.0, ry: 2.5, n: 30, seed: 202 },
  { id: "indochina", cx: 78.9, cy: 42, rx: 0.9, ry: 1.8, n: 14, seed: 203 },
  { id: "borneo", cx: 81.7, cy: 49.7, rx: 0.85, ry: 1.05, n: 12, seed: 204 },
  { id: "sumatra", cx: 78.4, cy: 47.6, rx: 1.0, ry: 0.6, n: 9, seed: 206 },
  { id: "new-guinea", cx: 89.3, cy: 52.8, rx: 1.1, ry: 0.7, n: 10, seed: 205 },
];

/* Large dry / temperate woodlands, kept in the older rounded-canopy style. */
const DRY_FORESTS: Grove[] = [
  { id: "australia-east", cx: 88.2, cy: 61, rx: 2.0, ry: 2.4, n: 24, seed: 221 },
  { id: "australia-sw", cx: 84.1, cy: 63, rx: 0.9, ry: 0.8, n: 7, seed: 222 },
  { id: "india-dry", cx: 70, cy: 39, rx: 1.9, ry: 1.5, n: 22, seed: 223 },
  { id: "east-asia", cx: 82.6, cy: 30.6, rx: 1.7, ry: 1.4, n: 18, seed: 224 },
];

function inEllipse(rand: () => number, cx: number, cy: number, rx: number, ry: number) {
  for (;;) {
    const x = rand() * 2 - 1;
    const y = rand() * 2 - 1;
    if (x * x + y * y <= 1) return { x: cx + x * rx, y: cy + y * ry };
  }
}

/* palm: a slightly leaning trunk with a spray of drooping fronds */
const FROND_TIPS: Pt[] = [
  [-0.52, -0.12],
  [-0.34, -0.34],
  [0, -0.44],
  [0.34, -0.34],
  [0.52, -0.12],
];

const ALL_PALMS = RAINFORESTS.flatMap((g) => {
  const rand = mulberry32(g.seed);
  return Array.from({ length: g.n }, (_, i) => {
    const p = inEllipse(rand, g.cx, g.cy, g.rx, g.ry);
    const s = 0.8 + rand() * 0.5;
    const lean = (rand() - 0.5) * 0.5;
    const th = 0.6 * s; // trunk height
    const tx = p.x + lean * 0.18 * AX;
    const ty = p.y - th;
    const trunk = `M${f(p.x)},${f(p.y)} Q${f(p.x + lean * 0.09 * AX)},${f(p.y - th * 0.5)} ${f(tx)},${f(ty)}`;
    const fronds = FROND_TIPS.map(([fx, fy]) => {
      const ex = tx + fx * s * AX; // frond tip x
      const ey = ty + fy * s; // frond tip y (fy negative => up and out)
      const cx = tx + fx * s * 0.5 * AX;
      const cy = ty + fy * s * 0.5 - 0.14 * s; // lift control to arch the frond
      return `M${f(tx)},${f(ty)} Q${f(cx)},${f(cy)} ${f(ex)},${f(ey)}`;
    });
    return { key: `${g.id}-${i}`, y: p.y, trunk, fronds };
  });
}).sort((a, b) => a.y - b.y);

const ALL_TREES = DRY_FORESTS.flatMap((g) => {
  const rand = mulberry32(g.seed);
  return Array.from({ length: g.n }, (_, i) => {
    const p = inEllipse(rand, g.cx, g.cy, g.rx, g.ry);
    return { key: `${g.id}-${i}`, x: p.x, y: p.y, s: 0.8 + rand() * 0.5 };
  });
}).sort((a, b) => a.y - b.y);

/* ----------------------------------- deserts ---------------------------- */

interface Desert {
  id: string;
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  dots: number;
  dunes: number;
  seed: number;
}

const DESERTS: Desert[] = [
  { id: "sahara", cx: 53, cy: 37, rx: 5.5, ry: 2.6, dots: 110, dunes: 14, seed: 301 },
  { id: "arabia", cx: 63, cy: 37.5, rx: 1.8, ry: 2.0, dots: 40, dunes: 6, seed: 302 },
  { id: "gobi", cx: 78.5, cy: 26.5, rx: 2.0, ry: 1.2, dots: 34, dunes: 5, seed: 303 },
  { id: "kalahari", cx: 55.5, cy: 63, rx: 1.3, ry: 1.6, dots: 24, dunes: 4, seed: 304 },
  { id: "outback", cx: 86.3, cy: 63, rx: 2.2, ry: 1.6, dots: 44, dunes: 7, seed: 305 },
];

const DESERT_MARKS = DESERTS.map((d) => {
  const rand = mulberry32(d.seed);
  const dots = Array.from({ length: d.dots }, (_, i) => {
    const p = inEllipse(rand, d.cx, d.cy, d.rx, d.ry);
    return { key: `${d.id}-dot-${i}`, x: p.x, y: p.y, r: 0.05 + rand() * 0.04 };
  });
  const dunes = Array.from({ length: d.dunes }, (_, i) => {
    const p = inEllipse(rand, d.cx, d.cy, d.rx * 0.85, d.ry * 0.85);
    const dw = 0.35 + rand() * 0.25;
    const dh = 0.2 + rand() * 0.14;
    return {
      key: `${d.id}-dune-${i}`,
      d: `M${f(p.x - dw)},${f(p.y)} Q${f(p.x)},${f(p.y - dh)} ${f(p.x + dw)},${f(p.y)}`,
    };
  });
  return { id: d.id, dots, dunes };
});

/* ----------------------------------- ice -------------------------------- */

/* Reuse the real coastlines for Greenland and Antarctica, redrawn as pale
   ice sheets with scattered snow flecks so those regions read as permanently
   frozen — the way they look from orbit. */
interface IceSheet {
  id: string;
  d: string;
  minx: number;
  maxx: number;
  miny: number;
  maxy: number;
  pts: number;
}

function buildIceSheets(): IceSheet[] {
  const subs = LAND_PATH.split(/(?=M)/).filter((s) => s.trim().length > 0);
  const sheets: IceSheet[] = [];
  subs.forEach((sp, i) => {
    const nums = sp.match(/-?\d+\.?\d*/g);
    if (!nums) return;
    const v = nums.map(Number);
    let minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity, sx = 0, sy = 0, c = 0;
    for (let k = 0; k + 1 < v.length; k += 2) {
      const x = v[k], y = v[k + 1];
      sx += x; sy += y; c++;
      if (x < minx) minx = x;
      if (x > maxx) maxx = x;
      if (y < miny) miny = y;
      if (y > maxy) maxy = y;
    }
    if (c === 0) return;
    const cx = sx / c, cy = sy / c;
    const isAntarctica = cy > 82;
    // Greenland (not Iceland at cx ~44.7) — the big northern ice cap
    const isGreenland = cx >= 36 && cx <= 42 && cy < 18 && c > 50;
    if (isAntarctica || isGreenland) {
      sheets.push({ id: `ice-${i}`, d: sp, minx, maxx, miny, maxy, pts: c });
    }
  });
  return sheets;
}

const ICE_SHEETS = buildIceSheets();

/* short dash-and-crescent flecks scattered across the larger sheets,
   clipped to the coastline so they never spill into the sea */
const ICE_FLECKS = ICE_SHEETS.filter((s) => s.pts > 40).flatMap((s, si) => {
  const rand = mulberry32(1500 + si * 7);
  const area = (s.maxx - s.minx) * (s.maxy - s.miny);
  const n = Math.min(140, Math.max(12, Math.round(area * 0.5)));
  return Array.from({ length: n }, (_, i) => {
    const x = s.minx + rand() * (s.maxx - s.minx);
    const y = s.miny + rand() * (s.maxy - s.miny);
    const w = 0.22 + rand() * 0.4;
    return {
      key: `${s.id}-fleck-${i}`,
      clip: s.id,
      d: `M${f(x - w)},${f(y)} q${f(w)},-0.12 ${f(w * 2)},0`,
    };
  });
});

/* --------------------------- polar bears & penguins --------------------- */

/* Hand-drawn polar bear silhouette — scaled for the 100×100 map viewBox. */
function polarBear(cx: number, cy: number, s = 1) {
  const x = cx, y = cy;
  const w = 1.8 * s, h = 2.2 * s;
  return (
    <g key={`bear-${cx}-${cy}`}>
      <path
        d={`M${f(x - w * 0.3)},${f(y)} C${f(x - w * 0.35)},${f(y - h * 0.35)} ${f(x - w * 0.2)},${f(y - h * 0.65)} ${f(x)},${f(y - h * 0.6)} C${f(x + w * 0.25)},${f(y - h * 0.65)} ${f(x + w * 0.4)},${f(y - h * 0.35)} ${f(x + w * 0.35)},${f(y)} Z`}
        className="ice-sheet"
        fill="#d8bc8c"
        strokeWidth={0.12}
      />
      <circle cx={f(x - w * 0.12)} cy={f(y - h * 0.45)} r={0.15} fill="#3a2a16" stroke="none" />
      <circle cx={f(x + w * 0.15)} cy={f(y - h * 0.45)} r={0.15} fill="#3a2a16" stroke="none" />
      <circle cx={f(x - w * 0.12)} cy={f(y - h * 0.45)} r={0.06} fill="none" stroke="none" />
      <circle cx={f(x + w * 0.15)} cy={f(y - h * 0.45)} r={0.06} fill="none" stroke="none" />
      <path d={`M${f(x - w * 0.03)},${f(y - h * 0.25)} Q${f(x)},${f(y - h * 0.18)} ${f(x + w * 0.06)},${f(y - h * 0.25)}`} fill="none" className="river" strokeWidth={0.1} />
    </g>
  );
}

/* Hand-drawn penguin silhouette — scaled for the 100×100 map viewBox. */
function penguin(cx: number, cy: number, s = 1) {
  const x = cx, y = cy;
  const w = 1.2 * s, h = 2 * s;
  return (
    <g key={`peng-${cx}-${cy}`}>
      <ellipse cx={f(x)} cy={f(y - h * 0.5)} rx={w * 0.4} ry={h * 0.45} fill="#d8bc8c" className="lake" strokeWidth={0.1} />
      <ellipse cx={f(x)} cy={f(y - h * 0.5)} rx={w * 0.25} ry={h * 0.35} fill="#e8d5ab" stroke="none" opacity={0.5} />
      <path d={`M${f(x - w * 0.05)},${f(y)} L${f(x - w * 0.05)},${f(y - h * 0.9)} M${f(x + w * 0.05)},${f(y)} L${f(x + w * 0.05)},${f(y - h * 0.9)}`} className="palm-trunk" strokeWidth={0.1} />
      <circle cx={f(x)} cy={f(y - h * 0.75)} r={0.2} fill="#3a2a16" stroke="none" />
      <path d={`M${f(x - w * 0.15)},${f(y - h * 0.25)} Q${f(x)},${f(y - h * 0.18)} ${f(x + w * 0.15)},${f(y - h * 0.25)}`} fill="none" className="river" strokeWidth={0.08} />
    </g>
  );
}

const BEAR_POSITIONS = [
  [35.5, 90.5],
  [42.0, 93.0],
  [32.0, 92.5],
  [47.0, 91.0],
];
const ARCTIC_BEARS = BEAR_POSITIONS.map(([x, y]) => polarBear(x, y, 0.6 + 0.15 * Math.random()));

/* Arctic pack ice — a broad, ragged-edge patch at the top of the map
   where the Arctic Ocean would be, with irregular jagged coastline like
   Antarctica's southern edge. */
const ARCTIC_ICE_D =
  "M18,2 l2.5,-0.8 l1.8,0.3 l3.2,-0.6 l2.1,0.5 l2.8,-0.4 l1.5,0.6 l3.5,-0.3 l2,0.4 l2.4,-0.2 l1.8,0.5 l3,-0.6 l2.2,-0.1 l3,0.3 l2.5,-0.5 l2.8,0.2 l2,-0.3 l3.2,0.5 l2,-0.1 l1.5,0.4 l2,-0.3 l1.5,0.6 l1.2,-0.2 l1.8,0.8 l-0.8,1.2 l-1.2,0.6 l-1.5,0.4 l-2.2,0.5 l-1.8,0.2 l-3,0.4 l-2.5,0.2 l-3.5,-0.1 l-2.2,0.3 l-1.5,-0.2 l-2.8,0.4 l-2,-0.3 l-2.5,0.3 l-1.8,-0.2 l-2.2,0.5 l-2.5,0 l-2,-0.3 l-1.5,0.2 l-2.8,-0.2 l-2.2,0.4 l-4,-0.6 l-1.5,0.2 l-2,-0.4 l-3.5,-0.2 l-2.5,-0.5 l-1.2,-0.8 l-2,-0.6 l-0.5,-1.2 l0.8,-0.8 l1.5,-0.5 l2.8,-0.6 l2.2,-0.2 l3,-0.4 Z";

const ARCTIC_FLECKS = Array.from({ length: 30 }, (_, i) => {
  const x = 22 + Math.random() * 26;
  const y = Math.random() * 3.5;
  const w = 0.15 + Math.random() * 0.35;
  return {
    key: `arctic-fleck-${i}`,
    clip: "arctic-ice",
    d: `M${f(x - w)},${f(y)} q${f(w)},-0.1 ${f(w * 2)},0`,
  };
});

/* Penguins in the far north — scattered across the Arctic ice. */
const ARCTIC_PENGUINS = [
  [27.0, 2.2],
  [33.5, 1.8],
  [29.0, 4.5],
  [38.0, 2.5],
  [35.0, 4.0],
  [42.0, 1.2],
].map(([x, y]) => penguin(x, y, 0.5 * (0.85 + Math.random() * 0.3)));

/* ---------------------------------- component --------------------------- */

export function TerrainFeatures() {
  return (
    <g className="terrain-features" aria-hidden="true">
      <defs>
        {ICE_SHEETS.map((s) => (
          <clipPath key={`clip-${s.id}`} id={`clip-${s.id}`}>
            <path d={s.d} />
          </clipPath>
        ))}
        <clipPath id="clip-arctic-ice">
          <path d={ARCTIC_ICE_D} />
        </clipPath>
      </defs>

      {/* frozen ice sheets, drawn under everything else */}
      {ICE_SHEETS.map((s) => (
        <path key={s.id} d={s.d} className="ice-sheet" />
      ))}
      {ICE_FLECKS.map((fl) => (
        <path key={fl.key} d={fl.d} className="ice-fleck" clipPath={`url(#clip-${fl.clip})`} />
      ))}

      {/* Arctic sea ice pack */}
      <path d={ARCTIC_ICE_D} className="ice-sheet" opacity={0.6} />
      {ARCTIC_FLECKS.map((fl) => (
        <path key={fl.key} d={fl.d} className="ice-fleck" clipPath="url(#clip-arctic-ice)" />
      ))}

      {/* wandering polar bears on the Antarctic ice */}
      {ARCTIC_BEARS}

      {/* penguins waddling across the Arctic ice */}
      {ARCTIC_PENGUINS}

      {LAKES.map((l) => (
        <path key={l.id} d={l.d} className="lake" />
      ))}
      {LAKE_WAVES.map((w) => (
        <path key={w.key} d={w.d} className="lake-wave" />
      ))}
      {NESSIE.map((d, i) => (
        <path key={`nessie-${i}`} d={d} className="nessie" />
      ))}

      {RIVERS.map((r) => (
        <path key={r.id} d={r.d} className="river" />
      ))}

      {DESERT_MARKS.map((d) => (
        <g key={d.id}>
          {d.dots.map((dot) => (
            <circle key={dot.key} cx={f(dot.x)} cy={f(dot.y)} r={f(dot.r)} className="desert-dot" />
          ))}
          {d.dunes.map((dune) => (
            <path key={dune.key} d={dune.d} className="dune" />
          ))}
        </g>
      ))}

      {/* dry / temperate woodlands: rounded canopy glyphs */}
      {ALL_TREES.map((t) => (
        <g key={t.key}>
          <path
            d={`M${f(t.x)},${f(t.y)} L${f(t.x)},${f(t.y - 0.42 * t.s)}`}
            className="tree-trunk"
          />
          <ellipse
            cx={f(t.x)}
            cy={f(t.y - 0.68 * t.s)}
            rx={f(0.42 * t.s * AX)}
            ry={f(0.3 * t.s)}
            className="tree-canopy"
          />
        </g>
      ))}

      {/* rainforests: dense palms */}
      {ALL_PALMS.map((t) => (
        <g key={t.key}>
          <path d={t.trunk} className="palm-trunk" />
          {t.fronds.map((d, i) => (
            <path key={`${t.key}-fr-${i}`} d={d} className="palm-frond" />
          ))}
        </g>
      ))}

      {ALL_PEAKS.map((p) => (
        <g key={p.key}>
          <path d={peakBody(p)} className="mountain__body" />
          <path d={peakShade(p)} className="mountain__shade" />
          {p.h >= SNOW_H && <path d={peakSnow(p)} className="mountain__snow" />}
        </g>
      ))}
    </g>
  );
}
