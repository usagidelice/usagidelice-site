export type EventItem = {
  title: string;
  dateLabel: string;
  location: string;
  status: "upcoming" | "regular" | "past";
  description: string;
};

export const events: EventItem[] = [
  {
    title: "Asia Street Food",
    dateLabel: "5–6 septembre 2026",
    location: "Parc Floral de Paris",
    status: "upcoming",
    description: "Deux jours de cuisine asiatique au Parc Floral : retrouvez notre stand et la cuisson des takoyaki en direct.",
  },
  {
    title: "Rice Market",
    dateLabel: "19 septembre 2026",
    location: "Paris 13e",
    status: "upcoming",
    description: "Une journée dédiée aux cuisines d’Asie, avec nos takoyaki préparés sur place.",
  },
  {
    title: "Fête de la Lune de Belleville",
    dateLabel: "3–4 octobre 2026",
    location: "Belleville, Paris",
    status: "upcoming",
    description: "Retrouvez Usagi Délice pendant le week-end de la Fête de la Lune à Belleville.",
  },
  {
    title: "Game’in Reims",
    dateLabel: "21–22 novembre 2026",
    location: "Parc des Expositions de Reims",
    status: "upcoming",
    description: "Takoyaki d’Osaka au cœur de ce rendez-vous pop culture et gaming.",
  },
  {
    title: "Marché de Vincennes",
    dateLabel: "Le dimanche, selon notre calendrier",
    location: "Vincennes",
    status: "regular",
    description:
      "Retrouvez-nous au marché pour des takoyaki faits maison, préparés sur place.",
  },
];
