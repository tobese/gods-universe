import type { God } from "../../types/mythology";

export const japaneseGods: God[] = [
  {
    id: "japanese-amaterasu",
    name: "Amaterasu",
    domains: ["the Sun", "the Imperial Line"],
    symbols: ["the mirror Yata no Kagami", "the sun"],
    bio: "Amaterasu once hid in a cave in grief and rage, plunging the world into darkness, until the other kami lured her out with laughter, music, and a mirror reflecting her own dazzling light back at her. Japan's imperial family traces its descent directly from her.",
    family: { siblings: ["japanese-susanoo", "japanese-tsukuyomi"] },
  },
  {
    id: "japanese-susanoo",
    name: "Susanoo",
    domains: ["Storms", "the Sea"],
    symbols: ["the sword Kusanagi", "a storm"],
    bio: "Susanoo's stormy temper drove him from heaven after he offended his sister Amaterasu, but he redeemed himself on earth by slaying an eight-headed serpent and recovering a legendary sword from its tail.",
    family: { siblings: ["japanese-amaterasu", "japanese-tsukuyomi"] },
  },
  {
    id: "japanese-tsukuyomi",
    name: "Tsukuyomi",
    domains: ["the Moon", "Night"],
    symbols: ["the moon"],
    bio: "Tsukuyomi killed the food goddess Uke Mochi in disgust at how she produced her feast, so appalling his sister Amaterasu that she vowed never to share the sky with him again — the origin myth for why sun and moon never meet.",
    family: { siblings: ["japanese-amaterasu", "japanese-susanoo"] },
  },
  {
    id: "japanese-izanagi",
    name: "Izanagi",
    domains: ["Creation"],
    symbols: ["a jeweled spear"],
    bio: "Izanagi and his wife Izanami stirred the primordial ocean with a jeweled spear to create the islands of Japan, birthing the kami of nature itself before a tragic journey to the underworld tore them apart.",
    family: { spouses: ["japanese-izanami"], children: ["japanese-amaterasu", "japanese-susanoo", "japanese-tsukuyomi"] },
  },
  {
    id: "japanese-izanami",
    name: "Izanami",
    domains: ["Creation", "Death"],
    symbols: ["the underworld"],
    bio: "Izanami died giving birth to the fire god and became ruler of Yomi, the land of the dead — when her husband Izanagi broke his promise not to look at her decayed form, she cursed the living to die, one thousand a day.",
    family: { spouses: ["japanese-izanagi"] },
  },
  {
    id: "japanese-inari",
    name: "Inari",
    domains: ["Rice", "Prosperity", "Foxes"],
    symbols: ["the fox (kitsune)", "rice sheaves"],
    bio: "Inari's thousands of vermilion torii gates, most famously at Fushimi Inari-Taisha, mark shrines to the god of rice and business prosperity, guarded by fox spirits acting as messengers.",
  },
  {
    id: "japanese-hachiman",
    name: "Hachiman",
    domains: ["War", "Archery", "Protection of the Nation"],
    symbols: ["the dove", "the bow"],
    bio: "Hachiman became the patron god of warriors and, in particular, of the samurai class, worshipped at shrines throughout Japan as a protector of the nation in times of conflict.",
  },
];
