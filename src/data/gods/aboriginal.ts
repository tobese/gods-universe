import type { God } from "../../types/mythology";

/**
 * A small, general-audience selection of widely-published Dreaming figures.
 * Aboriginal Australia holds hundreds of distinct nations and language
 * groups, each with its own Dreaming stories — many of which are sacred,
 * regionally specific, and not intended for retelling outside their
 * custodian communities. This is not a unified "pantheon" in the sense the
 * other cultures on this map use; see the framing note on the pantheon page.
 */
export const aboriginalGods: God[] = [
  {
    id: "aboriginal-rainbow-serpent",
    name: "The Rainbow Serpent",
    domains: ["Water", "Creation", "Fertility"],
    symbols: ["the serpent", "the rainbow", "waterholes"],
    bio: "One of the most widely known Dreaming figures, told in many different forms across numerous Aboriginal nations, the Rainbow Serpent moved across the sleeping land carving out rivers, waterholes, and mountain ranges as it traveled.",
  },
  {
    id: "aboriginal-baiame",
    name: "Baiame",
    domains: ["Creation", "Law", "the Sky"],
    symbols: ["a boomerang-shaped sky camp"],
    bio: "In the traditions of several nations of southeastern Australia, Baiame is a sky-father figure associated with the creation of the land and the establishment of law and ceremony, said to watch over the world from above.",
  },
  {
    id: "aboriginal-bunjil",
    name: "Bunjil",
    domains: ["Creation", "Law"],
    symbols: ["the wedge-tailed eagle"],
    bio: "For the Kulin nations of what is now southeastern Australia, Bunjil is an eagle-associated ancestral creator figure who shaped the land and its people and taught the law that governs it.",
  },
  {
    id: "aboriginal-yhi",
    name: "Yhi",
    domains: ["the Sun", "Light", "Awakening of Life"],
    symbols: ["sunlight"],
    bio: "In some southeastern traditions, Yhi is a sun-goddess whose light woke the sleeping creatures of the earth into life — a Dreaming story about how warmth and light brought the world to being.",
  },
];
