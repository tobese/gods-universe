import type { SeaMyth } from "../types/mythology";

export const seaMyths: SeaMyth[] = [
  {
    id: "kraken",
    name: "The Kraken",
    culture: "Norwegian / Scandinavian",
    domains: ["Sea Monster", "Sailors' Dread", "the Deep"],
    bio: "Said to lurk off the coasts of Norway and Greenland, the Kraken was so vast that sailors sometimes mistook its surfacing back for a new island. Its favored trick was dragging entire ships beneath the waves with tentacles thick as ship masts — though it was also said to stir up shoals of fish so rich that some captains dared to fish directly above it.",
    mapPosition: { x: 37, y: 13 },
  },
  {
    id: "jormungandr-sea",
    name: "Jörmungandr",
    culture: "Norse",
    domains: ["the World Ocean", "Ragnarök", "Thor's Great Rival"],
    bio: "Cast into the sea by Odin, Jörmungandr grew so enormous that it now encircles the entire world, biting its own tail. Thor once fished for it and failed to land it; at Ragnarök the two are fated to finally kill each other.",
    mapPosition: { x: 44, y: 5 },
  },
  {
    id: "selkies",
    name: "Selkies",
    culture: "Celtic / Scottish & Irish",
    domains: ["Seal Folk", "Shed Skins", "the North Sea"],
    bio: "Selkies live as seals in the water and shed their sealskin to walk on land as strikingly beautiful people. Many a folktale tells of someone hiding a selkie's skin to keep them ashore as a spouse — and of the ache that follows when the skin is found and the sea inevitably calls them back.",
    mapPosition: { x: 35, y: 22 },
  },
  {
    id: "leviathan",
    name: "Leviathan",
    culture: "Hebrew / Near Eastern",
    domains: ["Chaos of the Deep", "the Primordial Sea"],
    bio: "Leviathan is the great sea-serpent of Hebrew scripture and Near Eastern myth, a coiling monster of the primordial ocean so immense that only the divine could subdue it. Job and the Psalms both invoke it as proof that no mortal power can tame the chaos of the open sea.",
    mapPosition: { x: 58, y: 47 },
  },
  {
    id: "scylla-charybdis",
    name: "Scylla and Charybdis",
    culture: "Greek",
    domains: ["the Strait", "Shipwreck", "Impossible Choice"],
    bio: "Flanking a narrow strait, six-headed Scylla snatched sailors from passing ships while the whirlpool Charybdis swallowed the sea itself three times a day. Odysseus had to choose which terror to risk passing closer to — giving the world the phrase 'between Scylla and Charybdis' for a choice between two dangers.",
    mapPosition: { x: 48, y: 49 },
  },
  {
    id: "makara",
    name: "Makara",
    culture: "Hindu",
    domains: ["River Crossings", "Sacred Waters", "Vahana of Ganga"],
    bio: "Part crocodile, part fish, sometimes part elephant, the Makara is the composite guardian of India's sacred waters — carrying the river-goddess Ganga and standing watch over temple thresholds and doorways across the subcontinent.",
    mapPosition: { x: 72, y: 50 },
  },
  {
    id: "umibozu",
    name: "Umibōzu",
    culture: "Japanese",
    domains: ["Calm Before the Storm", "Drowned Sailors"],
    bio: "A silent, bald black shape rises from suddenly still water to capsize boats — Umibōzu appears without warning on nights when the sea has gone unnervingly calm. Some tales say it only asks for a barrel; handing over one with no bottom is said to save the crew.",
    mapPosition: { x: 97, y: 42 },
  },
  {
    id: "bunyip",
    name: "The Bunyip",
    culture: "Aboriginal Australian",
    domains: ["Billabongs & Waterholes", "Warning Cry"],
    bio: "Described very differently from region to region, the Bunyip is said to lurk in billabongs, swamps, and riverbeds across Australia, its bellowing cry a warning to stay clear of the water's edge after dark. Like other Dreaming figures, accounts of it vary enormously between nations — read this as a small general sampling, not one fixed creature.",
    mapPosition: { x: 73, y: 66 },
  },
];

export function getSeaMythById(id: string): SeaMyth | undefined {
  return seaMyths.find((s) => s.id === id);
}
