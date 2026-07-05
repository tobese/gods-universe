import type { God } from "../../types/mythology";

export const aztecGods: God[] = [
  {
    id: "aztec-quetzalcoatl",
    name: "Quetzalcoatl",
    akas: ["Feathered Serpent"],
    domains: ["Wind", "Learning", "Creation", "the Morning Star"],
    symbols: ["a feathered serpent", "the wind"],
    bio: "The Feathered Serpent descended to the underworld to gather the bones of a past age and, mixing them with his own blood, created humanity anew. He is credited with gifting people maize and the calendar.",
    family: { siblings: ["aztec-tezcatlipoca"] },
  },
  {
    id: "aztec-tezcatlipoca",
    name: "Tezcatlipoca",
    akas: ["Smoking Mirror"],
    domains: ["Night", "Sorcery", "Fate", "Kingship"],
    symbols: ["an obsidian mirror", "a jaguar"],
    bio: "Tezcatlipoca's obsidian mirror shows him all that happens in the world — a capricious, all-seeing rival to Quetzalcoatl whose rivalry with his brother shaped the destruction and rebirth of several cosmic ages.",
    family: { siblings: ["aztec-quetzalcoatl"] },
  },
  {
    id: "aztec-huitzilopochtli",
    name: "Huitzilopochtli",
    akas: ["Hummingbird of the South"],
    domains: ["the Sun", "War"],
    symbols: ["the hummingbird", "a fire serpent"],
    bio: "Patron god of the Mexica people and their capital Tenochtitlan, Huitzilopochtli was born fully armed to defend his mother from four hundred siblings, and each dawn must be fed with sacrifice to keep the sun moving.",
  },
  {
    id: "aztec-tlaloc",
    name: "Tlaloc",
    domains: ["Rain", "Fertility", "Storms"],
    symbols: ["goggle-like eyes", "a lightning bolt", "jade"],
    bio: "Tlaloc's rains bring life to the maize fields but can just as easily bring floods and lightning — his favor was sought, and his temper feared, throughout the farming year.",
  },
  {
    id: "aztec-xochiquetzal",
    name: "Xochiquetzal",
    domains: ["Love", "Beauty", "Flowers", "Craftswomen"],
    symbols: ["marigolds", "a butterfly"],
    bio: "Xochiquetzal presides over love, beauty, and the artistry of weavers and craftswomen, and was honored in a springtime festival of flowers and music.",
  },
  {
    id: "aztec-mictlantecuhtli",
    name: "Mictlantecuhtli",
    domains: ["Death", "the Underworld"],
    symbols: ["a skeletal figure", "owls"],
    bio: "Lord of Mictlan, the lowest of the underworld's nine levels, Mictlantecuhtli receives those who die of ordinary causes after a long, arduous four-year journey through the underworld's trials.",
  },
];
