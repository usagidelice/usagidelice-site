export type EventItem = {
  title: string;
  dateLabel: string;
  location: string;
  status: "upcoming" | "regular" | "past";
  description: string;
};

export const events: EventItem[] = [
  {
    title: "Marché de Vincennes",
    dateLabel: "Dimanche 25 janvier 2026",
    location: "Vincennes",
    status: "regular",
    description:
      "Retrouvez-nous au marché pour des takoyaki faits maison, préparés sur place.",
  },
];
