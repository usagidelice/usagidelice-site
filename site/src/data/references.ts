export type Partner = {
  name: string;
  kind: "Collaboration" | "Festival" | "Événement";
  note?: string;
  // Optional: put a logo file here later (SVG/PNG/WebP). Keep empty for text-tiles.
  logo?: string;
};

export type PhotoShape = "landscape" | "portrait" | "square";

export type RefPhoto = {
  src: string;
  alt: string;
  caption: string; // shown on the photo as a tasteful label
  shape?: PhotoShape; // controls layout in the carousel (no crop rule for lightbox)
  id?: string; // optional stable id for lightbox
};

import galleryData from "./gallery.json";

export const referencesIntro = {
  title: "Événements & collaborations",
  subtitle:
    "Retrouvez ici les événements déjà réalisés, les collaborations et les images de notre stand sur le terrain.",
  stats: [
    { k: "+ de", v: "2", label: "marchés / semaine" },
    { k: "Formats", v: "Pop-ups", label: "& festivals" },
    { k: "Service", v: "sur place", label: "flux continu" },
  ],
};

export const partners: Partner[] = [
  { name: "UNIQLO Paris", kind: "Collaboration", logo: "/images/partners/uniqlo.svg" },
  { name: "Japan Fes", kind: "Festival", logo: "/images/partners/japan-fes.svg" },
  { name: "Rice Market", kind: "Événement", logo: "/images/partners/rice-market.svg" },
  { name: "Marché de Noël · La Villette", kind: "Événement", logo: "/images/partners/la-villette-noel.svg" },
];

/**
 * NOTE:
 * - shape controls the thumbnail frame ratio in the carousel:
 *   landscape = 4/3, portrait = 3/4, square = 1/1
 * - The lightbox ALWAYS shows the full image (object-fit: contain).
 * Change shapes later if you add lots of portrait images.
 */
/* Gallery content is edited through Pages CMS; keep the type contract here. */
export const refPhotos = galleryData as RefPhoto[];
