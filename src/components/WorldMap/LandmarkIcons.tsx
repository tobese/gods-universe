import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function NorseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M24 40 L15 47 M24 40 L33 47 M24 40 L24 47"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="22" y="24" width="4" height="17" />
      <circle cx="24" cy="17" r="11" />
      <circle cx="14" cy="21" r="7.5" />
      <circle cx="34" cy="21" r="7.5" />
    </Icon>
  );
}

export function GreekIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polygon points="10,18 24,7 38,18" />
      <rect x="8" y="18" width="32" height="3" />
      <rect x="9" y="21" width="3" height="16" />
      <rect x="16" y="21" width="3" height="16" />
      <rect x="23" y="21" width="3" height="16" />
      <rect x="30" y="21" width="3" height="16" />
      <rect x="37" y="21" width="3" height="16" />
      <rect x="6" y="37" width="36" height="3" />
    </Icon>
  );
}

export function RomanIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polygon points="8,16 24,5 40,16" />
      <rect x="6" y="16" width="36" height="3" />
      <rect x="8" y="19" width="3" height="18" />
      <rect x="14.8" y="19" width="3" height="18" />
      <rect x="21.6" y="19" width="3" height="18" />
      <rect x="27.2" y="19" width="3" height="18" />
      <rect x="34" y="19" width="3" height="18" />
      <rect x="4" y="37" width="40" height="3" />
      <path d="M20 37 A4 4 0 0 1 28 37 Z" opacity="0.55" />
    </Icon>
  );
}

export function AztecIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="6" y="34" width="36" height="6" />
      <rect x="9" y="28" width="30" height="6" />
      <rect x="12" y="22" width="24" height="6" />
      <rect x="15" y="16" width="18" height="6" />
      <rect x="14" y="9" width="8" height="7" />
      <rect x="26" y="9" width="8" height="7" />
      <polygon points="12,9 18,4 24,9" />
      <polygon points="24,9 30,4 36,9" />
    </Icon>
  );
}

export function MayaIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="12" y="36" width="24" height="4" />
      <rect x="14" y="32" width="20" height="4" />
      <rect x="16" y="28" width="16" height="4" />
      <rect x="18" y="24" width="12" height="4" />
      <rect x="20" y="20" width="8" height="4" />
      <rect x="19" y="13" width="10" height="7" />
      <rect x="22" y="6" width="4" height="7" />
      <polygon points="22,6 24,2 26,6" />
    </Icon>
  );
}

export function IncaIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="36" width="40" height="4" />
      <rect x="8" y="32" width="32" height="4" />
      <rect x="12" y="28" width="24" height="4" />
      <rect x="16" y="24" width="16" height="4" />
      <circle cx="24" cy="13" r="5" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M24 4 L24 6.5" />
        <path d="M32 8 L30.3 9.9" />
        <path d="M35 15.5 L32.5 15.5" />
        <path d="M16 8 L17.7 9.9" />
        <path d="M13 15.5 L15.5 15.5" />
      </g>
    </Icon>
  );
}

export function EgyptianIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polygon points="4,40 19,15 34,40" />
      <polygon points="35,40 39,40 38,19 36,19" />
      <polygon points="35.3,19 39.3,19 37.3,12" />
    </Icon>
  );
}

export function CelticIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="40" width="40" height="2.5" />
      <rect x="6" y="26" width="5" height="14" rx="2" />
      <rect x="13" y="19" width="5" height="21" rx="2" />
      <rect x="21" y="15" width="6" height="25" rx="2" />
      <rect x="29" y="19" width="5" height="21" rx="2" />
      <rect x="37" y="26" width="5" height="14" rx="2" />
      <rect x="12" y="13.5" width="16" height="3" rx="1.2" opacity="0.85" />
    </Icon>
  );
}

export function SlavicIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polygon points="9,22 24,8 39,22" />
      <rect x="12" y="22" width="24" height="16" />
      <rect x="21" y="29" width="6" height="9" opacity="0.6" />
      <rect x="40" y="23" width="3" height="15" />
      <circle cx="41.5" cy="20" r="3" />
    </Icon>
  );
}

export function HinduIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polygon points="10,40 38,40 34,34 14,34" />
      <polygon points="14,34 34,34 31,28 17,28" />
      <polygon points="17,28 31,28 28,22 20,22" />
      <polygon points="20,22 28,22 26,16 22,16" />
      <polygon points="22,16 26,16 24,8" />
      <circle cx="24" cy="6" r="2" />
    </Icon>
  );
}

export function ChineseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="23" y="4" width="2" height="6" />
      <polygon points="18,14 24,9 30,14" />
      <rect x="20" y="14" width="8" height="4" />
      <polygon points="12,20 24,14 36,20" />
      <rect x="15" y="20" width="18" height="5" />
      <polygon points="6,27 24,20 42,27" />
      <rect x="10" y="27" width="28" height="7" />
    </Icon>
  );
}

export function JapaneseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="12" y="12" width="4" height="28" />
      <rect x="32" y="12" width="4" height="28" />
      <rect x="9" y="22" width="30" height="3" />
      <rect x="5" y="9" width="38" height="3.2" />
      <polygon points="4,9 9,9 6.5,4.5" />
      <polygon points="44,9 39,9 41.5,4.5" />
    </Icon>
  );
}

export function MesopotamianIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="6" y="34" width="36" height="6" />
      <rect x="10" y="28" width="28" height="6" />
      <rect x="14" y="22" width="20" height="6" />
      <rect x="18" y="16" width="12" height="6" />
      <rect x="21" y="10" width="6" height="6" />
    </Icon>
  );
}

export function PolynesianIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="4" y="34" width="40" height="6" />
      <rect x="10" y="28" width="28" height="6" />
      <rect x="14" y="14" width="4" height="14" />
      <rect x="22" y="11" width="4" height="17" />
      <rect x="30" y="14" width="4" height="14" />
    </Icon>
  );
}

export function AboriginalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <ellipse cx="24" cy="34" rx="19" ry="7" opacity="0.7" />
      <path d="M8 34 Q8 15 24 15 Q40 15 40 34 Z" />
      <circle cx="24" cy="8" r="3.4" />
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
        <path d="M24 1 L24 3.2" />
        <path d="M17.5 3.5 L18.8 5.4" />
        <path d="M30.5 3.5 L29.2 5.4" />
      </g>
    </Icon>
  );
}

export const landmarkIcons: Record<string, (props: IconProps) => ReactElement> = {
  norse: NorseIcon,
  greek: GreekIcon,
  roman: RomanIcon,
  aztec: AztecIcon,
  maya: MayaIcon,
  inca: IncaIcon,
  egyptian: EgyptianIcon,
  celtic: CelticIcon,
  slavic: SlavicIcon,
  hindu: HinduIcon,
  chinese: ChineseIcon,
  japanese: JapaneseIcon,
  mesopotamian: MesopotamianIcon,
  polynesian: PolynesianIcon,
  "aboriginal-australian": AboriginalIcon,
};
