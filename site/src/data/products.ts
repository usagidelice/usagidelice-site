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
    image: "/images/product-takoyaki.jpg",
  },
  {
    slug: "ebiyaki",
    name: "Ebiyaki",
    subtitle: "Une version crevette, gourmande et légère",
    description:
      "Même esprit que le takoyaki, avec de la crevette. Parfait si vous voulez découvrir une alternative tout aussi savoureuse.",
    highlights: [
      "Alternative à la pieuvre",
      "Texture moelleuse",
      "Sauces au choix",
    ],
    image: "/images/product-ebiyaki.jpg",
  },
  {
    slug: "okonomiyaki",
    name: "Okonomiyaki",
    subtitle: "La crêpe salée d’Osaka, généreuse",
    description:
      "Choux, pâte maison, garnitures et toppings japonais. Une street food iconique, réconfortante et parfumée.",
    highlights: ["Osaka style", "Très réconfortant", "Parfait à partager"],
    image: "/images/product-okonomiyaki.jpg",
  },
];
