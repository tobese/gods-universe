import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Sea monsters drawn as engraved ink figures, the way beasts were inked
 * onto 16th-century nautical charts: outlines, sparse hatching, and a
 * broken waterline under each one. All strokes use currentColor so the
 * marker CSS picks the ink tone.
 */
function Icon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

function Waves({ y = 41 }: { y?: number }) {
  return (
    <g strokeWidth="1.3" strokeLinecap="round">
      <path d={`M5,${y} q3.5,-2.6 7,0 t7,0 t7,0 t7,0 t7,0 t7,0 t7,0`} opacity="0.75" />
      <path d={`M16,${y + 4} q3.5,-2.2 7,0 t7,0 t7,0 t7,0`} opacity="0.45" />
    </g>
  );
}

export function KrakenIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* mantle */}
      <path d="M25,24 C24,12 27,7 32,7 C37,7 40,12 39,24" strokeWidth="1.8" />
      <path d="M25,24 Q32,28 39,24" strokeWidth="1.6" />
      <g strokeWidth="0.9" opacity="0.55">
        <path d="M27,12 C26.4,15 26.2,18 26.4,21" />
        <path d="M29.5,9.5 C28.8,13 28.6,17 28.8,21" />
      </g>
      <circle cx="29.5" cy="18" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="34.5" cy="18" r="1.2" fill="currentColor" stroke="none" />
      {/* tentacles, curling at the tips */}
      <g strokeWidth="2.2" strokeLinecap="round">
        <path d="M25,25 C20,30 12,31 9,26 C7.5,23 11,20.5 12.5,23.5" />
        <path d="M27.5,26 C25,34 18,38 13.5,36 C10.5,34.4 12.5,30.5 15,32.5" />
        <path d="M32,27 C32,36 28.5,40.5 24,39.5 C21,38.8 22,35 24.8,36.2" />
        <path d="M36.5,26 C39,34 46,38 50.5,36 C53.5,34.4 51.5,30.5 49,32.5" />
        <path d="M39,25 C44,30 52,31 55,26 C56.5,23 53,20.5 51.5,23.5" />
      </g>
      <g fill="currentColor" stroke="none" opacity="0.6">
        <circle cx="30.6" cy="31" r="0.7" />
        <circle cx="30" cy="34.5" r="0.7" />
        <circle cx="28.4" cy="37.4" r="0.7" />
      </g>
      <Waves y={42} />
    </Icon>
  );
}

export function JormungandrIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* head rearing with open jaw */}
      <path d="M10,38 C5.5,29 7,20 13,16" strokeWidth="3" strokeLinecap="round" />
      <path d="M13,16 C14,12.5 19,11 22.5,13.5 L17.5,17.5 C15.5,18.8 13.8,18 13,16 Z" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.5,17.5 L20,21.5" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="15.6" cy="14.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M14.5,12.5 L12.5,7.5 M17.5,11.8 L17,7" strokeWidth="1.2" strokeLinecap="round" />
      {/* coils breaking the surface */}
      <path d="M17,41 C21,28 29,28 33,41" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M37,41 C41,30 48,30 52,41" strokeWidth="3.2" strokeLinecap="round" />
      <polygon points="23.5,31 25.5,25.5 27.5,31" fill="currentColor" stroke="none" />
      <polygon points="43,33 45,27.5 47,33" fill="currentColor" stroke="none" />
      {/* tail lifting a fluke */}
      <path d="M55,41 C58,36 60.5,33 60,28" strokeWidth="2.4" strokeLinecap="round" />
      <polygon points="60,28 55.5,24.5 63,22.5" fill="currentColor" stroke="none" />
      <Waves y={42} />
    </Icon>
  );
}

export function SelkieIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* seal arcing out of the sea, nose raised */}
      <path d="M10,36 C12,23 27,13 41,17" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M10,36 C17,38 28,35 38,28" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M41,17 C45,15.5 49,16.5 50.5,19 C51.5,21 49,23.5 45,23.5 C41.5,23.5 39.5,21 38,28" strokeWidth="1.7" />
      <circle cx="45.6" cy="18.8" r="0.9" fill="currentColor" stroke="none" />
      <path d="M50.5,20.5 L54,20 M50.3,21.6 L53.6,22" strokeWidth="0.8" opacity="0.7" />
      {/* fore flipper and tail flukes */}
      <path d="M27,32.5 C25,35.5 23.5,38 24.5,40.5" strokeWidth="1.8" strokeLinecap="round" />
      <polygon points="10,36 4,31.5 6.5,38.5" fill="currentColor" stroke="none" />
      <g strokeWidth="0.9" opacity="0.55">
        <path d="M18,30.5 C19,28.5 20.5,26.5 22.5,24.5" />
        <path d="M24,32 C25,30 26.5,28 28.5,26" />
      </g>
      <g fill="currentColor" stroke="none" opacity="0.6">
        <circle cx="33" cy="34" r="0.7" />
        <circle cx="36.5" cy="37" r="0.7" />
        <circle cx="30" cy="38.5" r="0.7" />
      </g>
      <Waves y={42} />
    </Icon>
  );
}

export function LeviathanIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* double spout */}
      <g strokeWidth="1.3" strokeLinecap="round" opacity="0.85">
        <path d="M23,13 C21,8 17,6 13,7.5" />
        <path d="M23,13 C23,7 27,4.5 31,6" />
      </g>
      <g fill="currentColor" stroke="none" opacity="0.6">
        <circle cx="12" cy="10" r="0.8" />
        <circle cx="32" cy="9" r="0.8" />
      </g>
      {/* great head and open jaw with teeth */}
      <path d="M8,31 C8,21 15,15 24,15 C35,15 44,19 50,25 C53.5,28.5 55.5,33 54,38" strokeWidth="1.9" />
      <path d="M8,31 C9.5,35.5 13,38 18,37.5" strokeWidth="1.7" />
      <path d="M9.5,32.5 L11.5,34.8 L12.5,31.8 L14.5,34.6 L15.5,31.6 L17.3,34.2" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="17.5" cy="24" r="1.2" fill="currentColor" stroke="none" />
      {/* dorsal fin and body hatching */}
      <polygon points="33,17 37,8.5 40.5,18" fill="currentColor" stroke="none" />
      <g strokeWidth="0.9" opacity="0.5">
        <path d="M26,17 C27,21 27,26 26,30" />
        <path d="M33,18.5 C34,22 34,26 33,29.5" />
        <path d="M40,20.5 C41,23.5 41,27 40,30" />
      </g>
      {/* tail rising to a fluke */}
      <path d="M54,38 C57.5,35.5 59.5,31.5 59,27" strokeWidth="2" strokeLinecap="round" />
      <polygon points="59,27 54.5,23.5 62.5,21.5" fill="currentColor" stroke="none" />
      <Waves y={42} />
    </Icon>
  );
}

export function ScyllaCharybdisIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* Scylla: three serpent necks */}
      <g strokeWidth="2" strokeLinecap="round">
        <path d="M8,40 C6,31 10,25 8.5,18" />
        <path d="M15,40 C15,29 19.5,25 17.5,15" />
        <path d="M22,40 C24,31 26,27 24,20" />
      </g>
      <g strokeWidth="1.3" strokeLinecap="round">
        <path d="M8.5,18 L13,16.5 M8.5,18 L12,20.5" />
        <path d="M17.5,15 L22,13.5 M17.5,15 L21,17.5" />
        <path d="M24,20 L28.5,18.5 M24,20 L27.5,22.5" />
      </g>
      <g fill="currentColor" stroke="none">
        <circle cx="9.3" cy="16.7" r="0.8" />
        <circle cx="18.3" cy="13.7" r="0.8" />
        <circle cx="24.8" cy="18.7" r="0.8" />
      </g>
      {/* Charybdis: the whirlpool */}
      <g strokeWidth="1.5" strokeLinecap="round">
        <path d="M56,31 A10,6.5 0 1 0 36,31" />
        <path d="M36,31 A7.5,5 0 1 0 51,31" />
        <path d="M51,31 A5,3.4 0 1 0 41,31" />
        <path d="M41,31 A2.6,1.8 0 1 0 46.2,31" />
      </g>
      <Waves y={42} />
    </Icon>
  );
}

export function MakaraIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* curled trunk over a crocodile snout */}
      <path d="M7,26 C3,22 3.5,15.5 8,14 C10.5,13.2 11.5,16 9.5,17.2" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7,26 L18,24.5 M7,29.5 L17,30.5" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9,26.5 L10.5,29 L12.5,26 L14,29.2 L16,26.5" strokeWidth="1" strokeLinejoin="round" />
      <circle cx="19.5" cy="23.5" r="1" fill="currentColor" stroke="none" />
      {/* scaled body */}
      <path d="M18,24.5 C28,19.5 36,20.5 43,25" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17,30.5 C26,34 34,34 41,31" strokeWidth="1.8" strokeLinecap="round" />
      <g strokeWidth="0.9" opacity="0.55">
        <path d="M24,23 q2,3 0,6.5" />
        <path d="M30,22 q2,3.4 0,7.5" />
        <path d="M36,22.5 q2,3.2 0,7" />
      </g>
      <path d="M26,33 L24.5,38 M35,33.5 L36.5,38" strokeWidth="1.5" strokeLinecap="round" />
      {/* foliate tail spiraling up */}
      <path d="M43,25 C51,22 55,16 51.5,10.5 C49,6.8 44,9 46,13 C47.2,15.2 50.5,14 50,11.5" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M43,29 C49,28 53,25 55,21" strokeWidth="1.3" strokeLinecap="round" opacity="0.7" />
      <Waves y={42} />
    </Icon>
  );
}

export function UmibozuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* vast dark head rising from a calm sea */}
      <path d="M17,39 C15,20 22,9 32,9 C42,9 49,20 47,39 Z" fill="currentColor" stroke="none" />
      <ellipse cx="27" cy="22" rx="1.9" ry="3" fill="#e8d5ab" stroke="none" />
      <ellipse cx="37" cy="22" rx="1.9" ry="3" fill="#e8d5ab" stroke="none" />
      {/* one swell breaking against it */}
      <path d="M4,38 C8,32 13,32 16,36 C18,38.5 20,39.5 23,39" strokeWidth="1.6" strokeLinecap="round" />
      <Waves y={42} />
    </Icon>
  );
}

export function BunyipIcon(props: IconProps) {
  return (
    <Icon {...props}>
      {/* reeds at the billabong's edge */}
      <g strokeWidth="1.3" strokeLinecap="round">
        <path d="M9,41 L9,26" />
        <path d="M12.5,41 C12.5,33 14,29 13.5,24" />
        <path d="M53,41 L53,27" />
        <path d="M50,41 C50,34 48.5,30 49,26" />
      </g>
      <ellipse cx="9" cy="24" rx="1.3" ry="3" fill="currentColor" stroke="none" />
      <ellipse cx="53" cy="25" rx="1.3" ry="3" fill="currentColor" stroke="none" />
      {/* shaggy beast, half-submerged */}
      <path d="M22,40 C22,27 26,20 32,20 C38,20 42,27 42,40" strokeWidth="1.9" />
      <g strokeWidth="1" strokeLinecap="round" opacity="0.65">
        <path d="M23.5,30 L21,29" />
        <path d="M24,26 L21.8,24.5" />
        <path d="M40.5,30 L43,29" />
        <path d="M40,26 L42.2,24.5" />
      </g>
      <path d="M27.5,21 C26.5,17.5 28,15.5 30,16.5 M36.5,21 C37.5,17.5 36,15.5 34,16.5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="29" cy="27" r="1" fill="currentColor" stroke="none" />
      <circle cx="35" cy="27" r="1" fill="currentColor" stroke="none" />
      <path d="M30,31.5 Q32,33.5 34,31.5" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16,39.5 q4,-2.4 8,0 M40,39.5 q4,-2.4 8,0" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <Waves y={43} />
    </Icon>
  );
}

export const seaMythIcons: Record<string, (props: IconProps) => ReactElement> = {
  kraken: KrakenIcon,
  "jormungandr-sea": JormungandrIcon,
  selkies: SelkieIcon,
  leviathan: LeviathanIcon,
  "scylla-charybdis": ScyllaCharybdisIcon,
  makara: MakaraIcon,
  umibozu: UmibozuIcon,
  bunyip: BunyipIcon,
};
