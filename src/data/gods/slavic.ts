import type { God } from "../../types/mythology";

export const slavicGods: God[] = [
  {
    id: "slavic-perun",
    name: "Perun",
    domains: ["Thunder", "War", "the Sky", "Oak Trees"],
    symbols: ["the axe", "the oak tree", "lightning"],
    bio: "Perun rules the sky from the highest hill and the tallest oak, locked in eternal cyclical combat with the serpentine Veles — a struggle later chroniclers read as the turning of the seasons themselves.",
    family: { spouses: ["slavic-mokosh"] },
  },
  {
    id: "slavic-veles",
    name: "Veles",
    domains: ["the Underworld", "Cattle", "Trickery", "Magic"],
    symbols: ["the serpent", "cattle"],
    bio: "Shape-shifting Veles slithers up from the underworld each cycle to steal Perun's cattle or wife, provoking the storm-god's thunder — and each time is driven back down to his watery domain.",
  },
  {
    id: "slavic-mokosh",
    name: "Mokosh",
    domains: ["Earth", "Fertility", "Weaving", "Women's Work"],
    symbols: ["a spindle", "wet earth"],
    bio: "The one major goddess named across nearly all Slavic tribal pantheons, Mokosh governs childbirth, sheep-shearing, and spinning — earthy, essential, everyday concerns given divine weight.",
    family: { spouses: ["slavic-perun"] },
  },
  {
    id: "slavic-svarog",
    name: "Svarog",
    domains: ["Fire", "the Forge", "the Sky"],
    symbols: ["fire", "a blacksmith's hammer"],
    bio: "Svarog is honored as a celestial smith who forged the sun itself and taught humanity the use of fire and metal tools, fathering the sun-god Dazbog.",
    family: { children: ["slavic-dazbog"] },
  },
  {
    id: "slavic-dazbog",
    name: "Dazbog",
    akas: ["Dažbog"],
    domains: ["the Sun", "Prosperity", "Kingship"],
    symbols: ["the sun disk"],
    bio: "Dazbog rides his chariot across the sky as a giver of sunlight and prosperity, regarded by several medieval chroniclers as an ancestor-figure of Slavic princes.",
    family: { parents: ["slavic-svarog"] },
  },
  {
    id: "slavic-jarilo",
    name: "Jarilo",
    domains: ["Spring", "Fertility", "Vegetation"],
    symbols: ["young grain", "a white horse"],
    bio: "Jarilo dies each autumn and is ritually mourned, only to be reborn each spring in village festivals — a fertility god whose yearly death and return mirrors the growing season itself.",
  },
];
