import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function KrakenIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4,38 Q24,30 44,38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M14,38 C10,30 20,26 15,15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M24,39 C24,29 32,25 27,12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M34,38 C38,29 29,26 33,17"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="15" cy="15" r="1.8" />
      <circle cx="27" cy="12" r="1.8" />
      <circle cx="33" cy="17" r="1.8" />
    </Icon>
  );
}

export function JormungandrIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="24" cy="24" r="17" fill="none" stroke="currentColor" strokeWidth="3.6" />
      <polygon points="24,6 19,11 29,11" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M9,16 L5,13" />
        <path d="M6,24 L2,24" />
        <path d="M9,32 L5,35" />
        <path d="M39,16 L43,13" />
        <path d="M42,24 L46,24" />
        <path d="M39,32 L43,35" />
      </g>
    </Icon>
  );
}

export function SelkieIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <ellipse cx="17" cy="30" rx="11" ry="7.5" />
      <circle cx="8" cy="25" r="4.4" />
      <path
        d="M27,38 Q34,33 41,37 Q37,42 28,40 Z"
        opacity="0.7"
      />
      <path d="M2,42 Q24,38 46,42" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
    </Icon>
  );
}

export function LeviathanIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path
        d="M4,34 C10,20 16,20 18,28 C20,36 28,36 30,26 C32,16 40,18 42,26"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <polygon points="42,26 47,23 46,31" />
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
        <path d="M12,22 L10,17" />
        <path d="M20,29 L20,24" />
        <path d="M30,27 L31,22" />
      </g>
    </Icon>
  );
}

export function ScyllaCharybdisIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <circle cx="24" cy="27" r="15" fill="none" stroke="currentColor" strokeWidth="1.6" opacity="0.45" />
      <circle cx="24" cy="27" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" opacity="0.65" />
      <circle cx="24" cy="27" r="4.2" opacity="0.9" />
      <polygon points="10,14 13,8 15,14" />
      <polygon points="18,10 21,4 24,10" />
      <polygon points="27,10 30,4 33,10" />
      <polygon points="35,14 38,8 40,14" />
    </Icon>
  );
}

export function MakaraIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4,27 Q16,19 30,25 Q37,20 45,23 L42,29 Q35,25 30,31 Q16,35 4,29 Z" />
      <path
        d="M42,23 Q47,17 44,10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="25" r="1.3" opacity="0.4" />
    </Icon>
  );
}

export function UmibozuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M2,34 Q10,30 18,34 T34,34 T46,34" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="19" r="14" />
    </Icon>
  );
}

export function BunyipIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M8,40 L8,25" />
        <path d="M13,40 L12,21" />
        <path d="M35,40 L36,21" />
        <path d="M40,40 L40,25" />
      </g>
      <ellipse cx="24" cy="28" rx="14" ry="10.5" />
      <path
        d="M16,34 Q13,38 15,41"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M32,34 Q35,38 33,41"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
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
