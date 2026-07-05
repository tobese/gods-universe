import type { God } from "../../types/mythology";

export const mayaGods: God[] = [
  {
    id: "maya-kukulkan",
    name: "Kukulkan",
    akas: ["Feathered Serpent"],
    domains: ["Wind", "Rain", "Learning", "Kingship"],
    symbols: ["a feathered serpent"],
    bio: "Kukulkan's shadow famously appears to slither down the steps of the great pyramid at Chichen Itza during the equinoxes — a feathered-serpent deity of learning and civilization shared in spirit with Aztec Quetzalcoatl.",
  },
  {
    id: "maya-itzamna",
    name: "Itzamna",
    domains: ["Creation", "Writing", "Medicine", "the Sky"],
    symbols: ["an iguana", "a codex"],
    bio: "As the aged, wise creator god, Itzamna is credited with inventing writing and the calendar, and ruled over healing arts practiced by Maya priests.",
    family: { spouses: ["maya-ixchel"] },
  },
  {
    id: "maya-ixchel",
    name: "Ixchel",
    domains: ["the Moon", "Childbirth", "Weaving", "Medicine"],
    symbols: ["a rabbit", "a loom"],
    bio: "Ixchel governs the moon's cycles alongside childbirth and weaving, and pilgrims traveled to her shrine on the island of Cozumel seeking her blessing for fertility and safe delivery.",
    family: { spouses: ["maya-itzamna"] },
  },
  {
    id: "maya-chaac",
    name: "Chaac",
    domains: ["Rain", "Lightning", "Agriculture"],
    symbols: ["an axe", "a long-nosed mask"],
    bio: "Chaac wields a stone axe that strikes the clouds into thunder and rain — vital in a land of limestone with almost no rivers, where farmers depended entirely on his seasonal downpours.",
  },
  {
    id: "maya-ahpuch",
    name: "Ah Puch",
    akas: ["Kimi"],
    domains: ["Death", "the Underworld"],
    symbols: ["a skeletal body", "bells"],
    bio: "Lord of Mitnal, the lowest level of the Maya underworld, Ah Puch is often shown adorned with bells that warn of his approach — a death god both feared and ritually placated.",
  },
];
