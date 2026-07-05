export interface FamilyRelations {
  parents?: string[];
  spouses?: string[];
  children?: string[];
  siblings?: string[];
}

export interface God {
  id: string;
  name: string;
  akas?: string[];
  domains: string[];
  symbols?: string[];
  bio: string;
  family?: FamilyRelations;
}

export interface PantheonColorTheme {
  primary: string;
  secondary: string;
  accent: string;
}

export interface MapPosition {
  /** percentage across the map, 0-100 */
  x: number;
  /** percentage down the map, 0-100 */
  y: number;
}

export interface Pantheon {
  id: string;
  name: string;
  culture: string;
  region: string;
  landmarkName: string;
  landmarkBlurb: string;
  intro: string;
  colorTheme: PantheonColorTheme;
  mapPosition: MapPosition;
  gods: God[];
  /** optional framing/context note shown on the codex page, e.g. cultural sensitivity context */
  note?: string;
}

export interface SeaMyth {
  id: string;
  name: string;
  culture: string;
  domains: string[];
  bio: string;
  mapPosition: MapPosition;
}
