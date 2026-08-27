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
    alt: "Stand Usagi Délice au marché de Noël de La Villette",
    caption: "Marché de Noël · La Villette",
    shape: "portrait",
  },
  {
    id: "ph-2",
    src: "/images/references/photos/ref-photo-2.webp",
    alt: "Takoyaki d’Osaka servis chauds",
    caption: "Takoyaki · recette maison",
    shape: "landscape",
  },
  {
    id: "ph-3",
    src: "/images/references/photos/ref-photo-3.webp",
    alt: "Takoyaki Usagi Délice devant la Tour Eiffel",
    caption: "Paris · Tour Eiffel",
    shape: "portrait",
  },
  {
    id: "ph-4",
    src: "/images/references/photos/ref-photo-4.webp",
    alt: "Takoyaki Usagi Délice devant l’Arc de Triomphe",
    caption: "Paris · Arc de Triomphe",
    shape: "portrait",
  },
  {
    id: "ph-5",
    src: "/images/references/photos/ref-photo-5.webp",
    alt: "Cuisson des takoyaki sur la plaque",
    caption: "Cuisson minute · savoir-faire",
    shape: "landscape",
  },
  {
    id: "ph-6",
    src: "/images/references/photos/ref-photo-6.webp",
    alt: "Préparation des takoyaki devant le public",
    caption: "Préparation sur place · en direct",
    shape: "square",
  },
  {
    id: "ph-7",
    src: "/images/references/photos/ref-photo-7.webp",
    alt: "Service Usagi Délice pendant un événement fréquenté",
    caption: "Événement · service continu",
    shape: "landscape",
  },
  {
    id: "ph-8",
    src: "/images/references/photos/ref-photo-8.webp",
    alt: "Collaboration Usagi Délice avec UNIQLO Paris",
    caption: "Collaboration · UNIQLO Paris",
    shape: "portrait",
  },
  {
    id: "ph-9",
    src: "/images/references/photos/ref-photo-9.webp",
    alt: "Stand Usagi Délice en plein air",
    caption: "Festival · stand en plein air",
    shape: "portrait",
  },
  {
    id: "ph-10",
    src: "/images/references/photos/ref-photo-10.webp",
    alt: "Public devant le stand Usagi Délice en festival",
    caption: "Festival · Île-de-France",
    shape: "landscape",
  },
];
