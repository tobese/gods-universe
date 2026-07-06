import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 64 48" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function YetiIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M18,38 C16,32 18,18 26,12 C29,9.5 35,9.5 38,12 C44,18 46,30 44,38" strokeWidth="2" />
        <path d="M17,22 C12,20 9,23 11,26 C13,29 16,28 18,26" strokeWidth="1.6" />
        <path d="M45,22 C50,20 53,23 51,26 C49,29 46,28 44,26" strokeWidth="1.6" />
        <circle cx="28" cy="22" r="1.4" fill="currentColor" stroke="none" />
        <circle cx="35" cy="22" r="1.4" fill="currentColor" stroke="none" />
        <path d="M29.5,27 Q32,30 34.5,27" strokeWidth="1.6" />
        <path d="M26,15 C27,11 30,10 32,10 C34,10 36,11 37,14" strokeWidth="1.8" />
        <path d="M22,40 C22,43 24,45 26,44 C28,43 28,40 30,42 C31,43.5 33,44 33,43" strokeWidth="1.6" />
        <path d="M36,40 C36,43 38,45 40,44 C42,43 42,40 44,42 C45,43.5 47,44 47,43" strokeWidth="1.6" />
        <path d="M20,38 L20,45 M42,38 L42,45" strokeWidth="1.6" />
      </g>
    </Icon>
  );
}

export function BigfootIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,37 C18,24 21,15 28,11 C33,8.5 38,9.5 41,14 C44,19 45,28 43,37" strokeWidth="2" />
        <circle cx="29" cy="22" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="36" cy="22" r="1.5" fill="currentColor" stroke="none" />
        <path d="M30.5,27 Q33,30 35.5,27" strokeWidth="1.6" />
        <path d="M17,26 L13,37 M46,26 L50,37" strokeWidth="1.8" />
        <path d="M21,38 L19,45 M42,38 L44,45" strokeWidth="1.7" />
        <path d="M13,41 L13,45 M50,41 L50,45" strokeWidth="1.5" />
        <path d="M29,14 C30,11 34,11 35,13" strokeWidth="1.6" />
        <path d="M26,15 L27,10 M32,14 L33,9 M37,15 L38,11" strokeWidth="1" opacity="0.6" />
      </g>
    </Icon>
  );
}

export function ChupacabraIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M28,10 L24,16 C21,20 19,26 19,30 C19,35 22,38 26,39 C30,40 36,39 39,37 C42,34 44,29 43,25 C42,21 40,18 37,15 L34,10" strokeWidth="1.8" />
        <path d="M24,16 L18,14 L20,20 M37,16 L43,14 L41,20" strokeWidth="1.4" />
        <path d="M19,30 L13,33 L15,28 M43,28 L49,31 L47,26" strokeWidth="1.4" />
        <path d="M21,26 C20,28 20,30 22,31" strokeWidth="1.2" opacity="0.7" />
        <path d="M40,25 C41,28 41,30 39,32" strokeWidth="1.2" opacity="0.7" />
        <circle cx="26" cy="26" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="36" cy="26" r="1.3" fill="currentColor" stroke="none" />
        <path d="M27,30 Q31,34 35,30" strokeWidth="1.5" />
        <path d="M20,16 L17,12 M36,16 L39,12" strokeWidth="1.3" />
        <path d="M12,29 L15,37 Q18,39 22,37" strokeWidth="1.5" />
        <path d="M50,29 L47,37 Q44,39 40,37" strokeWidth="1.5" />
        <path d="M26,39 L26,46 M36,39 L36,46" strokeWidth="1.6" />
      </g>
    </Icon>
  );
}

export function MothmanIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="32" cy="27" rx="8" ry="10" strokeWidth="1.8" />
        <circle cx="27" cy="24" r="2" fill="#e8d5ab" stroke="none" />
        <circle cx="37" cy="24" r="2" fill="#e8d5ab" stroke="none" />
        <circle cx="27" cy="24" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="37" cy="24" r="0.8" fill="currentColor" stroke="none" />
        <path d="M28,30 Q32,33 36,30" strokeWidth="1.6" />
        <path d="M8,18 C14,6 24,8 26,17" strokeWidth="2" />
        <path d="M56,18 C50,6 40,8 38,17" strokeWidth="2" />
        <path d="M10,15 C13,9 18,7 20,12" strokeWidth="1.3" opacity="0.6" />
        <path d="M54,15 C51,9 46,7 44,12" strokeWidth="1.3" opacity="0.6" />
        <path d="M28,37 L28,46 M36,37 L36,46" strokeWidth="1.6" />
        <path d="M14,20 L8,22 M50,20 L56,22" strokeWidth="1.3" opacity="0.5" />
      </g>
    </Icon>
  );
}

export function ThunderbirdIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M8,30 C12,16 20,8 30,12" strokeWidth="2" />
        <path d="M56,30 C52,16 44,8 34,12" strokeWidth="2" />
        <path d="M4,22 C7,14 14,10 17,17" strokeWidth="1.3" opacity="0.6" />
        <path d="M60,22 C57,14 50,10 47,17" strokeWidth="1.3" opacity="0.6" />
        <path d="M30,12 C32,7 36,7 38,11 Q40,7 44,8 L42,13 Z" strokeWidth="1.8" />
        <path d="M10,20 L54,20" strokeWidth="2.8" />
        <path d="M22,15 L31,3 L42,15 Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="31.5" cy="11" r="1.3" fill="#e8d5ab" stroke="none" />
        <path d="M18,26 L26,32 L38,32 L46,26" strokeWidth="1.8" />
        <path d="M20,28 C22,35 26,38 32,38 C38,38 42,35 44,28" strokeWidth="1.6" />
        <path d="M28,32 L28,40 M36,32 L36,40" strokeWidth="1.5" />
        <path d="M10,24 L6,26 M54,24 L58,26" strokeWidth="1.3" opacity="0.5" />
      </g>
    </Icon>
  );
}

export function SilbonIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <path d="M30,8 L30,16" strokeWidth="2" />
        <path d="M22,16 L18,22 C16,28 18,34 16,38" strokeWidth="1.8" />
        <path d="M38,16 L42,22 C44,28 42,34 44,38" strokeWidth="1.8" />
        <path d="M16,38 L12,42 L16,44" strokeWidth="1.6" />
        <path d="M44,38 L48,42 L44,44" strokeWidth="1.6" />
        <path d="M30,16 C28,20 26,26 26,32 C26,36 28,40 30,44" strokeWidth="1.8" />
        <path d="M30,16 C32,20 34,26 34,32 C34,36 32,40 30,44" strokeWidth="1.8" />
        <circle cx="26" cy="24" r="1.5" strokeWidth="1.4" />
        <circle cx="34" cy="24" r="1.5" strokeWidth="1.4" />
        <path d="M27,29 C28,31 32,31 33,29" strokeWidth="1.4" />
        <path d="M18,18 L14,16 C12,15 10,16 10,18" strokeWidth="1.5" />
        <path d="M42,18 L46,16 C48,15 50,16 50,18" strokeWidth="1.5" />
        <path d="M30,44 L30,46" strokeWidth="1.6" />
      </g>
    </Icon>
  );
}

export function FsmIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <g strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="16" r="7" strokeWidth="2" />
        <circle cx="32" cy="16" r="3.5" strokeWidth="1.2" opacity="0.4" />
        <circle cx="28" cy="13" r="1.1" fill="currentColor" stroke="none" />
        <circle cx="36" cy="13" r="1.1" fill="currentColor" stroke="none" />
        <path d="M29,19 Q32,21.5 35,19" strokeWidth="1.5" />
        <path d="M25,16 L22.5,10 M25,16 L20.5,13 M25,16 L21,18" strokeWidth="2" />
        <path d="M39,16 L41.5,10 M39,16 L43.5,13 M39,16 L43,18" strokeWidth="2" />
        <path d="M28,23 Q24,26 22,30" strokeWidth="2" />
        <path d="M36,23 Q40,26 42,30" strokeWidth="2" />
        <path d="M22,30 C20,33 19,36 22,38 M22,30 C24,32 26,35 24,38" strokeWidth="1.5" />
        <path d="M42,30 C44,33 45,36 42,38 M42,30 C40,32 38,35 40,38" strokeWidth="1.5" />
        <path d="M22,30 C20,27 17,28 16,30 M42,30 C44,27 47,28 48,30" strokeWidth="1.3" opacity="0.6" />
        <path d="M30,28 C30,32 32,35 32,38 M34,28 C34,32 32,35 32,38" strokeWidth="1.5" />
        <ellipse cx="32" cy="16" rx="9" ry="9" strokeWidth="0.6" opacity="0.3" />
      </g>
    </Icon>
  );
}

export const landMythIcons: Record<string, (props: IconProps) => ReactElement> = {
  yeti: YetiIcon,
  bigfoot: BigfootIcon,
  chupacabra: ChupacabraIcon,
  mothman: MothmanIcon,
  thunderbird: ThunderbirdIcon,
  "el-silbon": SilbonIcon,
  "flying-spaghetti-monster": FsmIcon,
};
