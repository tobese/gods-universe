import type { God } from "../../types/mythology";

export const incaGods: God[] = [
  {
    id: "inca-inti",
    name: "Inti",
    domains: ["the Sun", "Kingship", "Warmth"],
    symbols: ["a golden sun disk"],
    bio: "Inti was the divine ancestor of the Inca emperors, the Sapa Inca ruling as his living son on earth. Coricancha, the golden Temple of the Sun in Cusco, was his grandest sanctuary.",
    family: { spouses: ["inca-mamaquilla"] },
  },
  {
    id: "inca-pachamama",
    name: "Pachamama",
    domains: ["Earth", "Fertility", "Mountains"],
    symbols: ["the mountain", "harvested crops"],
    bio: "Pachamama is the living earth herself, and is still honored today across the Andes with offerings of coca leaves and chicha poured directly into the soil before planting or building.",
  },
  {
    id: "inca-viracocha",
    name: "Viracocha",
    domains: ["Creation", "Civilization", "the Sea"],
    symbols: ["a staff", "the ocean"],
    bio: "Viracocha rose from Lake Titicaca to create the sun, moon, stars, and the first humans, then walked the earth teaching civilization to people before vanishing across the western sea.",
  },
  {
    id: "inca-mamaquilla",
    name: "Mama Quilla",
    domains: ["the Moon", "Marriage", "the Calendar"],
    symbols: ["a silver disk"],
    bio: "Mama Quilla governed the lunar calendar that timed Inca festivals and marked the passage of women's lives, and was honored as protector against eclipses, believed to be an attack by a celestial jaguar.",
    family: { spouses: ["inca-inti"] },
  },
  {
    id: "inca-illapa",
    name: "Illapa",
    domains: ["Thunder", "Lightning", "Rain", "War"],
    symbols: ["a sling and stone", "a war club"],
    bio: "Illapa's sling cracks like thunder and its stone falls as lightning; farmers prayed to him for the rain their mountain terraces depended on.",
  },
];
