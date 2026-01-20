export type EventItem = {
  title: string;
  dateLabel: string;
  location: string;
  status: 'upcoming' | 'regular' | 'past';
  description: string;
};

export const events: EventItem[] = [
  {
    title: 'Marché de Vincennes',
    dateLabel: 'Vendredi & dimanche',
    location: 'Vincennes',
    status: 'regular',
    description: "Retrouvez-nous au marché pour des takoyaki faits maison, préparés sur place."
  },
  {
    title: 'Marché Président Wilson',
    dateLabel: 'Samedi',
    location: 'Paris 16e',
    status: 'regular',
    description: "Notre rendez-vous du samedi : ambiance marché, cuisine minute, toppings au choix."
  },
  {
    title: 'Événement spécial (à annoncer)',
    dateLabel: 'Prochainement',
    location: 'Paris & Île-de-France',
    status: 'upcoming',
    description:
      "Suivez-nous sur Instagram pour la prochaine date : Japan Fes, matsuri, hanami... on vous tient au courant !"
  }
];
