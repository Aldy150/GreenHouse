import villa from "@/assets/villa.jpg";
import apartment from "@/assets/apartment.jpg";
import house from "@/assets/house.jpg";
import penthouse from "@/assets/penthouse.jpg";
import contemporary from "@/assets/contemporary.jpg";
import hero from "@/assets/hero.jpg";

export type TransactionType = "vente" | "location";
export type PropertyType = "Villa" | "Appartement" | "Maison" | "Penthouse" | "Studio";

export interface Agent {
  name: string;
  role: string;
  phone: string;
  email: string;
  initials: string;
}

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  transactionType: TransactionType;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  images: string[];
  description: string;
  features: string[];
  agent: Agent;
}

const agentList = [
  {
    name: "Camille Laurent",
    role: "Directrice d'agence",
    phone: "+33 1 84 21 45 10",
    email: "camille@greenhome.fr",
    initials: "CL",
  },
  {
    name: "Thomas Rivière",
    role: "Conseiller vente",
    phone: "+33 1 84 21 45 11",
    email: "thomas@greenhome.fr",
    initials: "TR",
  },
  {
    name: "Inès Moreau",
    role: "Spécialiste location",
    phone: "+33 1 84 21 45 12",
    email: "ines@greenhome.fr",
    initials: "IM",
  },
  {
    name: "Julien Beaumont",
    role: "Conseil en investissement",
    phone: "+33 1 84 21 45 13",
    email: "julien@greenhome.fr",
    initials: "JB",
  },
] as const satisfies readonly Agent[];

export const agents: Agent[] = [...agentList];
const [camille, thomas, ines, julien] = agentList;

export const agentSpecialities = [
  "Biens d'exception",
  "Maisons familiales",
  "Location longue durée",
  "Investissement locatif",
];

const baseFeatures = [
  "Cuisine équipée",
  "Double vitrage",
  "Fibre optique",
  "Chauffage récent",
  "Place de parking",
  "Cave",
];

export const properties: Property[] = [
  {
    id: "villa-moderne-piscine",
    title: "Villa moderne avec piscine",
    type: "Villa",
    transactionType: "vente",
    price: 895000,
    location: "Centre ville Brazzaville",
    bedrooms: 5,
    bathrooms: 3,
    area: 240,
    images: [villa, hero, contemporary], 
    description:
      "Une villa contemporaine baignée de lumière, pensée pour la vie de famille comme pour recevoir. Les pièces de vie s'ouvrent de plain-pied sur une terrasse et une piscine chauffée, dans un environnement calme et arboré.",
    features: ["Piscine chauffée", "Terrasse 60 m²", "Jardin paysager", ...baseFeatures],
    agent: camille,
  },
  {
    id: "appartement-centre-ville",
    title: "Appartement lumineux en centre-ville",
    type: "Appartement",
    transactionType: "vente",
    price: 418000,
    location: "Ngoyo Pointe-Noire",
    bedrooms: 3,
    bathrooms: 2,
    area: 92,
    images: [apartment, penthouse, hero],
    description:
      "Au cœur de la Presqu'île, cet appartement traversant offre de beaux volumes, un parquet d'origine restauré et une exposition sud idéale. Commerces, écoles et transports à quelques minutes à pied.",
    features: ["Parquet massif", "Ascenseur", "Balcon", ...baseFeatures],
    agent: thomas,
  },
  {
    id: "maison-familiale-jardin",
    title: "Maison familiale avec jardin",
    type: "Maison",
    transactionType: "vente",
    price: 565000,
    location: "Quartier résidentiel  Pointe-Noire",
    bedrooms: 4,
    bathrooms: 2,
    area: 168,
    images: [house, contemporary, villa],
    description:
      "Une maison chaleureuse dans un quartier résidentiel recherché, avec un jardin clos exposé plein sud et un garage. Rénovée avec soin, elle ne demande aucun travaux.",
    features: ["Jardin clos 400 m²", "Garage", "Buanderie", ...baseFeatures],
    agent: camille,
  },
  {
    id: "penthouse-vue-panoramique",
    title: "Penthouse avec vue panoramique",
    type: "Penthouse",
    transactionType: "vente",
    price: 1290000,
    location: "Plateau de 15 ans Brazzaville",
    bedrooms: 4,
    bathrooms: 3,
    area: 185,
    images: [penthouse, apartment, hero],
    description:
      "Dernier étage d'une résidence contemporaine, ce penthouse profite d'une terrasse de 70 m² et d'une vue dégagée sur la ville. Prestations haut de gamme et domotique intégrée.",
    features: ["Terrasse 70 m²", "Domotique", "Climatisation", ...baseFeatures],
    agent: julien,
  },
  {
    id: "appartement-moderne-3-chambres",
    title: "Appartement moderne 3 chambres",
    type: "Appartement",
    transactionType: "location",
    price: 160500,
    location: "Quartier des affaires Pointe-Noire",
    bedrooms: 3,
    bathrooms: 1,
    area: 78,
    images: [apartment, hero, penthouse],
    description:
      "Appartement récent dans une résidence sécurisée, entièrement meublé et prêt à vivre. Parfait pour une famille ou une colocation professionnelle.",
    features: ["Meublé", "Résidence sécurisée", "Local vélo", ...baseFeatures],
    agent: ines,
  },
  {
    id: "maison-contemporaine",
    title: "Maison contemporaine",
    type: "Maison",
    transactionType: "vente",
    price: 742000,
    location: "Quartier résidentiel Brazzaville",
    bedrooms: 4,
    bathrooms: 3,
    area: 196,
    images: [contemporary, house, villa],
    description:
      "Architecture bois et béton, volumes généreux et grandes baies vitrées : une maison d'architecte à dix minutes du lac, économe en énergie.",
    features: ["Architecte", "Pompe à chaleur", "Panneaux solaires", ...baseFeatures],
    agent: thomas,
  },
  {
    id: "studio-lumineux-hypercentre",
    title: "Studio lumineux en hypercentre",
    type: "Studio",
    transactionType: "location",
    price: 780000,
    location: "Hypercentre Pointe-Noire",
    bedrooms: 1,
    bathrooms: 1,
    area: 32,
    images: [apartment, hero],
    description:
      "Studio optimisé au calme sur cour, idéal étudiant ou jeune actif, à deux pas du tramway et des commerces.",
    features: ["Au calme", "Kitchenette équipée", ...baseFeatures],
    agent: ines,
  },
  {
    id: "villa-bord-de-mer",
    title: "Villa en bord de mer",
    type: "Villa",
    transactionType: "vente",
    price: 1450000,
    location: "Mpaka Pointe-Noire",
    bedrooms: 6,
    bathrooms: 4,
    area: 310,
    images: [villa, penthouse, contemporary],
    description:
      "À quelques minutes de la plage, une villa d'exception avec piscine à débordement et vue océan depuis les pièces principales.",
    features: ["Vue océan", "Piscine à débordement", "Pool house", ...baseFeatures],
    agent: camille,
  },
  {
    id: "appartement-haussmannien",
    title: "Appartement haussmannien rénové",
    type: "Appartement",
    transactionType: "vente",
    price: 985000,
    location: "Quartier Andrade Brazzaville",
    bedrooms: 3,
    bathrooms: 2,
    area: 104,
    images: [apartment, hero, penthouse],
    description:
      "Moulures, cheminées et parquet point de Hongrie associés à une rénovation contemporaine soignée, au troisième étage avec ascenseur.",
    features: ["Moulures", "Cheminées", "Ascenseur", ...baseFeatures],
    agent: julien,
  },
  {
    id: "maison-de-ville-jardin",
    title: "Maison de ville avec patio",
    type: "Maison",
    transactionType: "location",
    price: 210000,
    location: "Bacongo Brazzaville",
    bedrooms: 4,
    bathrooms: 2,
    area: 145,
    images: [house, contemporary, villa],
    description:
      "Maison de ville pleine de charme avec patio intérieur, à louer non meublée, dans l'un des quartiers les plus prisés de la ville.",
    features: ["Patio", "Combles aménagés", "Cheminée", ...baseFeatures],
    agent: ines,
  },
  {
    id: "penthouse-duplex-terrasse",
    title: "Penthouse duplex avec terrasse",
    type: "Penthouse",
    transactionType: "location",
    price: 340000,
    location: "Avenue Nelson Mandela Pointe-Noire",
    bedrooms: 4,
    bathrooms: 3,
    area: 172,
    images: [penthouse, apartment, hero],
    description:
      "Duplex de standing avec double terrasse, prestations haut de gamme et place de parking en sous-sol.",
    features: ["Double terrasse", "Parking privatif", "Climatisation", ...baseFeatures],
    agent: julien,
  },
  {
    id: "maison-campagne-renovee",
    title: "Maison de campagne rénovée",
    type: "Maison",
    transactionType: "vente",
    price: 389000,
    location: "Talangai Brazzaville",
    bedrooms: 4,
    bathrooms: 2,
    area: 155,
    images: [house, villa, contemporary],
    description:
      "Pierres apparentes, poutres et confort moderne : une maison authentique entièrement rénovée avec un grand terrain arboré.",
    features: ["Pierres apparentes", "Terrain 1 200 m²", "Puits", ...baseFeatures],
    agent: thomas,
  },
];

export const propertyTypes: PropertyType[] = [
  "Villa",
  "Appartement",
  "Maison",
  "Penthouse",
  "Studio",
];

export const locations = Array.from(new Set(properties.map((p) => p.location))).sort();

export function formatPrice(property: Pick<Property, "price" | "transactionType">) {
  const value = new Intl.NumberFormat("fr-FR").format(property.price);
  return property.transactionType === "location" ? `${value} FCFA / mois` : `${value} FCFA`;
}

export function getProperty(id: string) {
  return properties.find((p) => p.id === id);
}