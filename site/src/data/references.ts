export type Partner = {
  name: string;
  kind: "Marque" | "Institution" | "Festival" | "Média" | "Lieu";
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

export const referencesIntro = {
  title: "Ils nous ont fait confiance",
  subtitle:
    "Un stand de street food japonaise habitué aux événements grand public, aux institutions et aux grandes marques — avec une production sur place et un service fluide, même en forte affluence.",
  stats: [
    { k: "+ de", v: "2", label: "marchés / semaine" },
    { k: "Formats", v: "Pop-ups", label: "& festivals" },
    { k: "Service", v: "sur place", label: "flux continu" },
  ],
};

export const partners: Partner[] = [
  { name: "UNIQLO", kind: "Marque" },
  { name: "Tang Frères", kind: "Marque" },
  { name: "Groupe Dadoune", kind: "Marque" },
  { name: "Japan Fes", kind: "Festival" },
  { name: "Rice Market (Europe Times)", kind: "Média" },
  { name: "Mairie de Vincennes", kind: "Institution" },
  { name: "Parc Floral / Vincennes", kind: "Lieu" },
  { name: "Parc départemental de Sceaux (92)", kind: "Lieu" },
  { name: "Marché de Noël — La Villette", kind: "Festival" },
];

/**
 * NOTE:
 * - shape controls the thumbnail frame ratio in the carousel:
 *   landscape = 4/3, portrait = 3/4, square = 1/1
 * - The lightbox ALWAYS shows the full image (object-fit: contain).
 * Change shapes later if you add lots of portrait images.
 */
export const refPhotos: RefPhoto[] = [
  {
    id: "ph-1",
    src: "/images/references/photos/ref-photo-1.webp",
    alt: "Stand Usagi Délice — marché",
    caption: "Marché · Vincennes",
    shape: "portrait",
  },
  {
    id: "ph-2",
    src: "/images/references/photos/ref-photo-2.webp",
    alt: "Takoyaki servis sur place",
    caption: "Service sur place · flux continu",
    shape: "landscape",
  },
  {
    id: "ph-3",
    src: "/images/references/photos/ref-photo-3.webp",
    alt: "Festival / pop-up",
    caption: "Festival · Paris & Île-de-France",
    shape: "portrait",
  },
  {
    id: "ph-4",
    src: "/images/references/photos/ref-photo-4.webp",
    alt: "Événement public",
    caption: "Événement public · grande affluence",
    shape: "landscape",
  },
  {
    id: "ph-5",
    src: "/images/references/photos/ref-photo-5.webp",
    alt: "Préparation takoyaki",
    caption: "Cuisine live · takoyaki d’Osaka",
    shape: "square",
  },
  {
    id: "ph-6",
    src: "/images/references/photos/ref-photo-6.webp",
    alt: "Photo stand",
    caption: "Pop-up · collaboration",
    shape: "portrait",
  },
];
