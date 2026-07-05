import { allGods, type GodLookup } from "./pantheons";

export interface Archetype {
  id: string;
  label: string;
  description: string;
  keywords: string[];
}

export const archetypes: Archetype[] = [
  {
    id: "sky-storm",
    label: "Sky & Storm Fathers",
    description: "The thundering sky-rulers who head each pantheon.",
    keywords: ["sky", "thunder", "storm"],
  },
  {
    id: "sun",
    label: "Sun Gods",
    description: "Those who carry or embody the sun's light.",
    keywords: ["sun"],
  },
  {
    id: "moon",
    label: "Moon Gods",
    description: "Rulers of the night sky and its cycles.",
    keywords: ["moon"],
  },
  {
    id: "death-underworld",
    label: "Death & the Underworld",
    description: "Keepers of the realms beyond life.",
    keywords: ["death", "underworld", "afterlife"],
  },
  {
    id: "sea-water",
    label: "Sea & Water",
    description: "Lords of oceans, rivers, and rain.",
    keywords: ["sea", "ocean", "water", "river", "fresh water", "rain"],
  },
  {
    id: "war",
    label: "War Gods",
    description: "Those invoked before battle.",
    keywords: ["war"],
  },
  {
    id: "love-beauty",
    label: "Love & Beauty",
    description: "Gods of desire, romance, and beauty.",
    keywords: ["love", "beauty", "desire"],
  },
  {
    id: "wisdom-knowledge",
    label: "Wisdom & Knowledge",
    description: "Patrons of learning, writing, and craft-wisdom.",
    keywords: ["wisdom", "knowledge", "learning", "writing"],
  },
  {
    id: "trickery",
    label: "Tricksters",
    description: "Shapeshifters and mischief-makers who bend the rules.",
    keywords: ["trick"],
  },
  {
    id: "fire-forge",
    label: "Fire & the Forge",
    description: "Smiths and fire-keepers.",
    keywords: ["fire", "forge"],
  },
  {
    id: "harvest-fertility",
    label: "Harvest & Fertility",
    description: "Givers of crops, growth, and new life.",
    keywords: ["harvest", "fertility", "agriculture", "grain"],
  },
  {
    id: "creation",
    label: "Creators",
    description: "Those credited with shaping the world or humanity.",
    keywords: ["creation"],
  },
];

export function getArchetypeGods(archetype: Archetype): GodLookup[] {
  return allGods.filter(({ god }) =>
    god.domains.some((domain) => {
      const lower = domain.toLowerCase();
      return archetype.keywords.some((kw) => lower.includes(kw));
    }),
  );
}

export function getArchetypesWithMatches(): Array<{ archetype: Archetype; gods: GodLookup[] }> {
  return archetypes
    .map((archetype) => ({ archetype, gods: getArchetypeGods(archetype) }))
    .filter(({ gods }) => new Set(gods.map(({ pantheon }) => pantheon.id)).size >= 2);
}
