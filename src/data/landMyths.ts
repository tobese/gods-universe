import type { SeaMyth } from "../types/mythology";

export const landMyths: SeaMyth[] = [
  {
    id: "yeti",
    name: "The Yeti",
    culture: "Himalayan / Tibetan & Sherpa",
    domains: ["the High Snows", "Footprints in the Ice"],
    bio: "Deep in the Himalayan snows, the Yeti — also called the Abominable Snowman or Meh-Teh — leaves enormous footprints across the glaciers. Sherpa folklore speaks of it as a wild, shaggy creature of the high passes, respected and feared in equal measure by those who climb above the tree line.",
    mapPosition: { x: 72, y: 30 },
  },
  {
    id: "bigfoot",
    name: "Bigfoot",
    culture: "North American / Salish & Pacific Northwest",
    domains: ["Deep Forest", "Wood Knocks", "Elusive Tracks"],
    bio: "Across the misty old-growth forests of the Pacific Northwest, Bigfoot — or Sasquatch to the Salish peoples — is said to lurk just beyond the campfire's glow. Thousands of footprints, blurry photographs, and eyewitness accounts have made it the most famous land cryptid on Earth, yet no definitive proof has ever surfaced.",
    mapPosition: { x: 12, y: 22 },
  },
  {
    id: "chupacabra",
    name: "El Chupacabra",
    culture: "Latin American (Puerto Rico)",
    domains: ["Night Raids", "Livestock", "the Unknown"],
    bio: "First reported in Puerto Rico in the 1990s, the Chupacabra — 'goat-sucker' — is said to drain the blood of livestock through small, precise punctures. Descriptions vary from a reptilian, spine-backed creature to a mangy, hairless dog, but its legend has spread across the Americas with astonishing speed.",
    mapPosition: { x: 30, y: 41 },
  },
  {
    id: "mothman",
    name: "The Mothman",
    culture: "West Virginia, USA",
    domains: ["Bridges", "Prophecy", "Wings in the Dark"],
    bio: "In 1966-67, the small town of Point Pleasant, West Virginia reported sightings of a towering, winged figure with glowing red eyes. Dubbed Mothman by the press, its appearances preceded the tragic collapse of the Silver Bridge — and to this day, sightings are interpreted by some as warnings of impending disaster.",
    mapPosition: { x: 24.5, y: 28.5 },
  },
  {
    id: "thunderbird",
    name: "The Thunderbird",
    culture: "Algonquian / Siouan / Indigenous North America",
    domains: ["the Sky", "Thunder", "Lightning"],
    bio: "The Thunderbird is a giant winged spirit of the Great Plains and eastern woodlands, whose beating wings create thunder and whose eyes flash lightning. It battles the great horned serpent beneath the waters and is so vast that it can carry a whale in its talons — a guardian of the sky since time beyond memory.",
    mapPosition: { x: 18, y: 20 },
  },
  {
    id: "el-silbon",
    name: "El Silbón",
    culture: "Venezuelan / Colombian",
    domains: ["the Llanos", "Whistling", "Wandering Soul"],
    bio: "El Silbón (the Whistler) is a gaunt specter that wanders the Venezuelan and Colombian plains carrying a sack of bones. His whistling grows louder as he approaches — and hearing it close means you are safe, while a distant whistle means he is right behind you. He is said to be the restless soul of a son who murdered his father.",
    mapPosition: { x: 30.5, y: 46 },
  },
  {
    id: "flying-spaghetti-monster",
    name: "The Flying Spaghetti Monster",
    culture: "Pastafarian",
    domains: ["the Heavens", "Noodly Appendages", "Beer Volcanoes"],
    bio: "The Flying Spaghetti Monster is the divine creator of the universe according to the Church of the Flying Spaghetti Monster (Pastafarianism). Invisible and made entirely of spaghetti and meatballs, it created the world with its noodly appendages — and any evidence to the contrary was placed there by the Monster itself to test our faith. Ramen.",
    mapPosition: { x: 9, y: 8 },
  },
];

export function getLandMythById(id: string): SeaMyth | undefined {
  return landMyths.find((m) => m.id === id);
}
