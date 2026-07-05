import type { God } from "../../types/mythology";

export const chineseGods: God[] = [
  {
    id: "chinese-jade-emperor",
    name: "The Jade Emperor",
    akas: ["Yù Huáng"],
    domains: ["Heaven", "Bureaucracy of the Gods", "Justice"],
    symbols: ["the imperial dragon robe", "a jade tablet"],
    bio: "The Jade Emperor presides over a celestial bureaucracy that mirrors the imperial court on earth, appointing gods to their posts — kitchen, river, and city gods alike report to him each year.",
  },
  {
    id: "chinese-guanyin",
    name: "Guanyin",
    akas: ["Guanshiyin"],
    domains: ["Compassion", "Mercy", "Motherhood"],
    symbols: ["the willow branch", "a vase of pure water"],
    bio: "Guanyin, the bodhisattva of compassion, is said to hear the cries of every suffering being in the world and delays her own enlightenment to help each one first.",
  },
  {
    id: "chinese-nuwa",
    name: "Nüwa",
    domains: ["Creation", "Repair of the Sky", "Marriage"],
    symbols: ["a serpent's tail", "colored stones"],
    bio: "Nüwa molded the first humans from yellow river clay, and when a battle among gods cracked the pillars of heaven, she patched the sky itself with five-colored stones to save the world from flood and fire.",
    family: { spouses: ["chinese-fuxi"] },
  },
  {
    id: "chinese-fuxi",
    name: "Fuxi",
    domains: ["Civilization", "Writing", "Divination"],
    symbols: ["the eight trigrams", "a serpent's tail"],
    bio: "Fuxi is credited with inventing writing, fishing nets, and the eight trigrams that underlie the I Ching, teaching humanity the arts of civilization alongside his sister-wife Nüwa.",
    family: { spouses: ["chinese-nuwa"] },
  },
  {
    id: "chinese-change",
    name: "Chang'e",
    domains: ["the Moon", "Longing", "Immortality"],
    symbols: ["the moon", "a jade rabbit"],
    bio: "Chang'e swallowed an elixir of immortality to keep it from falling into the wrong hands and floated up to the moon, where she is still honored every autumn during the Mid-Autumn Festival.",
  },
  {
    id: "chinese-caishen",
    name: "Caishen",
    domains: ["Wealth", "Prosperity"],
    symbols: ["gold ingots", "a black tiger"],
    bio: "Caishen is welcomed into homes and businesses at Lunar New Year with firecrackers and offerings, the most popular god of fortune in Chinese folk religion.",
  },
];
