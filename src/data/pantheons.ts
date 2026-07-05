import type { God, Pantheon } from "../types/mythology";
import { norseGods } from "./gods/norse";
import { greekGods } from "./gods/greek";
import { romanGods } from "./gods/roman";
import { aztecGods } from "./gods/aztec";
import { mayaGods } from "./gods/maya";
import { incaGods } from "./gods/inca";
import { egyptianGods } from "./gods/egyptian";
import { celticGods } from "./gods/celtic";
import { slavicGods } from "./gods/slavic";
import { hinduGods } from "./gods/hindu";
import { chineseGods } from "./gods/chinese";
import { japaneseGods } from "./gods/japanese";
import { mesopotamianGods } from "./gods/mesopotamian";
import { polynesianGods } from "./gods/polynesian";
import { aboriginalGods } from "./gods/aboriginal";

/**
 * mapPosition is a percentage over the stylized world map (0,0 = top-left,
 * 100,100 = bottom-right), loosely following each culture's real-world
 * region of origin.
 */
export const pantheons: Pantheon[] = [
  {
    id: "norse",
    name: "Norse",
    culture: "Norse / Scandinavian",
    region: "Scandinavia",
    landmarkName: "Yggdrasil",
    landmarkBlurb:
      "The World Tree, whose roots and branches bind the Nine Realms together.",
    intro:
      "The gods of the frozen north hold court beneath Yggdrasil, the World Tree, where Asgard, Midgard, and seven other realms hang like fruit from ash-grey branches. Theirs is a saga of frost giants, fated battles, and a doom none of them can escape.",
    colorTheme: { primary: "#274b5e", secondary: "#9fb8c4", accent: "#d7e6ea" },
    mapPosition: { x: 54, y: 16 },
    gods: norseGods,
  },
  {
    id: "greek",
    name: "Greek",
    culture: "Ancient Greek",
    region: "Greece",
    landmarkName: "The Acropolis of Olympus",
    landmarkBlurb:
      "A marble citadel of columns and pediments crowning a cloud-wreathed peak.",
    intro:
      "High above the Aegean, the Twelve Olympians rule from a marble citadel in the clouds. Their myths are ones of jealousy, heroism, and transformation — a family as quick to bless mortals as to punish them.",
    colorTheme: { primary: "#2f4f6b", secondary: "#e8e2d0", accent: "#c9a24b" },
    mapPosition: { x: 56, y: 28 },
    gods: greekGods,
  },
  {
    id: "roman",
    name: "Roman",
    culture: "Ancient Roman",
    region: "Italy",
    landmarkName: "The Capitoline Temple",
    landmarkBlurb:
      "A grand pillared temple atop Rome's sacred hill, dedicated to the Capitoline Triad.",
    intro:
      "Rome recast the Greek pantheon in its own image: disciplined, civic, and bound to the fate of an empire. Its gods preside over law, war, and the hearth with a stern, administrative authority.",
    colorTheme: { primary: "#6b2f2f", secondary: "#e8dfc9", accent: "#c9a24b" },
    mapPosition: { x: 53, y: 27 },
    gods: romanGods,
  },
  {
    id: "aztec",
    name: "Aztec",
    culture: "Aztec / Mexica",
    region: "Central Mexico",
    landmarkName: "Templo Mayor",
    landmarkBlurb:
      "A twin-shrined step pyramid rising from the lake-city of Tenochtitlan.",
    intro:
      "At the heart of Tenochtitlan, a great step-pyramid held twin shrines to sun and rain. Aztec myth is one of cosmic sacrifice — the gods gave everything to set the sun moving, and expect the same devotion in return.",
    colorTheme: { primary: "#7a2e1d", secondary: "#e7c56b", accent: "#2f7a4f" },
    mapPosition: { x: 22, y: 39 },
    gods: aztecGods,
  },
  {
    id: "maya",
    name: "Maya",
    culture: "Maya",
    region: "Yucatán & Central America",
    landmarkName: "The Tikal Step-Pyramid",
    landmarkBlurb:
      "A jungle-shrouded temple-pyramid climbing toward a carved stone sky.",
    intro:
      "From city-states hidden in the jungle canopy, Maya priest-astronomers charted a universe of cyclical time, feathered serpents, and a perilous underworld journey every soul must one day take.",
    colorTheme: { primary: "#1f5c4a", secondary: "#e7c56b", accent: "#7a2e1d" },
    mapPosition: { x: 25, y: 39 },
    gods: mayaGods,
  },
  {
    id: "inca",
    name: "Inca",
    culture: "Inca",
    region: "Andes / Peru",
    landmarkName: "Coricancha",
    landmarkBlurb:
      "The gold-sheathed Temple of the Sun, terraced into the Andean peaks.",
    intro:
      "High in the Andes, the Inca built a golden temple to Inti, the sun, and wove a cosmology of mountain spirits and a earth-mother who demanded careful, reciprocal tending.",
    colorTheme: { primary: "#8a6d2f", secondary: "#e9c873", accent: "#3c5a6b" },
    mapPosition: { x: 29, y: 57 },
    gods: incaGods,
  },
  {
    id: "egyptian",
    name: "Egyptian",
    culture: "Ancient Egyptian",
    region: "Nile Valley",
    landmarkName: "The Temple of Karnak",
    landmarkBlurb:
      "A vast hypostyle hall of towering painted columns beside the Nile.",
    intro:
      "Along the Nile's fertile banks, a pantheon of falcon-headed, jackal-headed, and sun-crowned gods governed the delicate balance between order and chaos, life and the long journey after death.",
    colorTheme: { primary: "#8a6d2f", secondary: "#3c6b8a", accent: "#c9a24b" },
    mapPosition: { x: 59, y: 35 },
    gods: egyptianGods,
  },
  {
    id: "celtic",
    name: "Celtic",
    culture: "Celtic (Irish / Gaelic)",
    region: "Ireland & Britain",
    landmarkName: "The Standing Stone Circle",
    landmarkBlurb:
      "An ancient ring of megaliths in a mist-veiled grove.",
    intro:
      "In misty groves and stone circles, the Tuatha Dé Danann — a fading race of gods — ruled over craft, war, and the harvest before yielding the land to mortals and slipping into the hollow hills.",
    colorTheme: { primary: "#2f5c3f", secondary: "#c9c2a0", accent: "#7a6647" },
    mapPosition: { x: 48, y: 21 },
    gods: celticGods,
  },
  {
    id: "slavic",
    name: "Slavic",
    culture: "Slavic",
    region: "Eastern Europe",
    landmarkName: "The Shrine of Arkona",
    landmarkBlurb:
      "A wooden hilltop temple of carved idols overlooking the Baltic.",
    intro:
      "Among birch forests and river valleys, the Slavic peoples honored a thunder-god locked in eternal struggle with a horned lord of the underworld — a myth of seasons dying and returning.",
    colorTheme: { primary: "#3c4a2f", secondary: "#c9a24b", accent: "#6b2f2f" },
    mapPosition: { x: 58, y: 19 },
    gods: slavicGods,
  },
  {
    id: "hindu",
    name: "Hindu",
    culture: "Hindu",
    region: "Indian Subcontinent",
    landmarkName: "The Nagara Temple Spire",
    landmarkBlurb:
      "A soaring, intricately carved temple tower reaching toward the heavens.",
    intro:
      "Across the subcontinent, an immense and living pantheon plays out the endless cycle of creation, preservation, and destruction — gods who take many forms, and whose stories are still told and celebrated today.",
    colorTheme: { primary: "#8a2f4a", secondary: "#e9c873", accent: "#2f6b5c" },
    mapPosition: { x: 72, y: 38 },
    gods: hinduGods,
  },
  {
    id: "chinese",
    name: "Chinese",
    culture: "Chinese",
    region: "China",
    landmarkName: "The Jade Pagoda",
    landmarkBlurb:
      "A red-lacquered, many-tiered pagoda wreathed in incense smoke.",
    intro:
      "A celestial bureaucracy mirrors the imperial court: a Jade Emperor presides over immortals, dragon kings, and kitchen gods, in myths that blend Daoist philosophy with folk legend.",
    colorTheme: { primary: "#8a1f1f", secondary: "#e9c873", accent: "#1f5c4a" },
    mapPosition: { x: 79, y: 31 },
    gods: chineseGods,
  },
  {
    id: "japanese",
    name: "Japanese",
    culture: "Japanese / Shinto",
    region: "Japan",
    landmarkName: "The Torii Shrine",
    landmarkBlurb:
      "A vermilion gate marking the threshold to a forest shrine.",
    intro:
      "In Shinto belief, kami — spirits of sun, storm, and rice field alike — dwell throughout the natural world, honored at shrines from mountain peaks to city gates.",
    colorTheme: { primary: "#a13a2f", secondary: "#e8dfc9", accent: "#2f6b5c" },
    mapPosition: { x: 88, y: 30 },
    gods: japaneseGods,
  },
  {
    id: "mesopotamian",
    name: "Mesopotamian",
    culture: "Sumerian / Akkadian / Babylonian",
    region: "Mesopotamia",
    landmarkName: "The Great Ziggurat",
    landmarkBlurb:
      "A stepped mudbrick tower rising from the plain between two rivers.",
    intro:
      "Between the Tigris and Euphrates, the world's oldest recorded myths tell of sky-fathers, storm-kings, and a goddess of love and war who descended, defiant, into the underworld itself.",
    colorTheme: { primary: "#8a6d2f", secondary: "#3c5a6b", accent: "#c9a24b" },
    mapPosition: { x: 62, y: 32 },
    gods: mesopotamianGods,
  },
  {
    id: "polynesian",
    name: "Polynesian",
    culture: "Polynesian",
    region: "Pacific Islands",
    landmarkName: "The Marae Platform",
    landmarkBlurb:
      "A stone-terraced sacred courtyard open to the sky and sea.",
    intro:
      "Across a vast ocean of islands, seafaring peoples honored gods of ocean, forest, and volcano, and told of Maui, the trickster demigod who fished up islands and slowed the sun.",
    colorTheme: { primary: "#1f5c6b", secondary: "#e9c873", accent: "#2f7a4f" },
    mapPosition: { x: 9, y: 56 },
    gods: polynesianGods,
  },
  {
    id: "aboriginal-australian",
    name: "Aboriginal Australian",
    culture: "Aboriginal Australian",
    region: "Australia",
    landmarkName: "The Ancestral Landform",
    landmarkBlurb:
      "A stylized red-earth rock formation, rendered generically out of respect for real sacred sites.",
    intro:
      "Aboriginal Australia holds hundreds of distinct nations and language groups, each with its own Dreaming stories of ancestral beings who shaped the land, sky, and law. What follows is only a small, general introduction — not a single unified mythology.",
    note:
      "This is a respectful, general-audience overview only. Aboriginal spiritual traditions are living, sacred, and vary enormously between nations; many stories and sites are restricted and not meant for outside retelling. Nothing here depicts a specific real sacred site or restricted story.",
    colorTheme: { primary: "#a13a1f", secondary: "#e9c873", accent: "#2f6b5c" },
    mapPosition: { x: 87, y: 64 },
    gods: aboriginalGods,
  },
];

export function getPantheonById(id: string): Pantheon | undefined {
  return pantheons.find((p) => p.id === id);
}

export interface GodLookup {
  god: God;
  pantheon: Pantheon;
}

export function getGodById(id: string): GodLookup | undefined {
  for (const pantheon of pantheons) {
    const god = pantheon.gods.find((g) => g.id === id);
    if (god) return { god, pantheon };
  }
  return undefined;
}
