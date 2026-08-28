export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image?: string;
};

export const products: Product[] = [
  {
    slug: "takoyaki",
    name: "Takoyaki",
    subtitle: "La spécialité d’Osaka, préparée à la minute",
    description:
      "Boules dorées, cœur fondant, sauce japonaise, mayonnaise, aonori et copeaux de bonite. Recette maison, cuisson sur place, esprit festival.",
    highlights: [
      "Faits maison",
      "Préparés sur place",
      "Toppings classiques japonais",
    ],
    image: "/images/product-takoyaki.webp",
  },
];
