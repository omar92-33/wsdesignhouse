/**
 * Single source of truth for all WS DESIGNHOUSE content.
 * Edit this file to update contact details, services, projects and copy.
 * Only verified, supplied information is stored here — never invent details.
 */

import kitchenAsset from "@/assets/kitchen.png.asset.json";
import bedroomAsset from "@/assets/bedroom.png.asset.json";
import entryAsset from "@/assets/entry.png.asset.json";
import founderPortraitAsset from "@/assets/founder-portrait.jpg.asset.json";


export const site = {
  name: "WS DESIGNHOUSE",
  tagline: "Design Spaces… Creating Dreams",
  positioning: "Interior Architecture Specialists",
  serviceLine: "Consultation • 3D Visualisation • Turnkey Execution",
  location: "New Cairo, Egypt",
  established: "EST. 2026",
  taxId: "504-743-953",
  email: "info@wsdesignhouse.com",
  phones: ["01002583892", "01206221243", "0225410567"],
  whatsappNumber: "201002583892",
  whatsappMessage:
    "Hi WS DESIGNHOUSE, I'm interested in discussing an interior design project. I'd like to arrange a private consultation.",
  coordinates: { lat: 30.00239, lng: 31.43581 },
  social: {
    instagram: "https://www.instagram.com/ws_designhouse",
    instagramHandle: "@ws_designhouse",
    tiktok: "https://www.tiktok.com/@ws.designhouse",
    tiktokHandle: "@ws.designhouse",
    linkedin: "https://www.linkedin.com/in/dr-wessam-abdellatif-9732a596",
    linkedinName: "Dr. Wessam Abdellatif",
    facebook: "https://www.facebook.com/share/1MpcGPjfVu/?mibextid=wwXIfr",
    facebookName: "WS DESIGNHOUSE",
  },
  virtualTour: "https://www.keypano.com/v/6gf64ctd4f8995-1763282139.html",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${site.coordinates.lat},${site.coordinates.lng}`;

export function whatsappUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telUrl(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export const navItems = [
  { label: "Projects", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "About WS", to: "/about" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
] as const;

/** The single primary conversion action used site-wide. */
export const primaryCta = { label: "Book a Private Consultation", to: "/contact" } as const;
export const secondaryCta = { label: "View Selected Projects", to: "/portfolio" } as const;

/** Three core service categories shown on the homepage. */
export const serviceCategories = [
  {
    title: "Consultation",
    body: "We listen, understand, and shape a direction that fits your space and lifestyle.",
    slug: "consultation",
  },
  {
    title: "3D Visualisation",
    body: "See the concept before execution through realistic visuals, moodboards, and material direction.",
    slug: "3d-visualisation",
  },
  {
    title: "Turnkey Execution",
    body: "From planning to final finishing, every detail is managed with care and precision.",
    slug: "turnkey-execution",
  },
] as const;

export interface Service {
  slug: string;
  title: string;
  short: string;
  intro: string;
  body: string[];
  hasPage: boolean;
}

export const services: Service[] = [
  {
    slug: "consultation",
    title: "Consultation",
    short:
      "We listen, understand, and shape a direction that fits your space and lifestyle.",
    intro:
      "Every project begins with a conversation about how you live and what you want your space to become.",
    body: [
      "The consultation is where we learn the character of the space, the rhythms of daily life, and the ambitions behind the project. We ask, listen, and translate those observations into a clear design direction.",
      "By the end of this stage you have a defined brief, an understanding of the possibilities, and a confident path forward — whether the project is a single room or an entire residence.",
    ],
    hasPage: true,
  },
  {
    slug: "3d-visualisation",
    title: "3D Visualisation",
    short:
      "See the concept before execution through realistic visuals, moodboards, and material direction.",
    intro: "A shared vision before anything is built.",
    body: [
      "We translate the design direction into clear visuals — 3D renders, moodboards, and material palettes — so you can experience the space before construction begins.",
      "This stage removes guesswork. Layouts, proportions, light, and finishes are reviewed together, allowing decisions to be made with confidence and the design intent to be protected through every later step.",
    ],
    hasPage: true,
  },
  {
    slug: "turnkey-execution",
    title: "Turnkey Execution",
    short:
      "From planning to final finishing, every detail is managed with care and precision.",
    intro: "One studio accountable from planning to handover.",
    body: [
      "Turnkey execution means we carry the design through every practical stage: technical planning, contractor coordination, material procurement, site supervision, and final finishing.",
      "The same studio that conceived the space oversees its completion, so the result stays faithful to the design rather than being diluted across multiple hands.",
    ],
    hasPage: true,
  },
];

export interface ProjectImage {
  /** Replace `src` with a real photograph to publish it. */
  src?: string;
  alt: string;
  aspect?: "portrait" | "landscape" | "wide";
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  hero?: ProjectImage;
  concept?: string;
  details?: string;
  space?: string;
  craft?: string;
  materials?: string[];
  projectLocation?: string;
  /** Property type label, e.g. "Private Residence". */
  propertyType?: string;
  /** Scope of work line, e.g. "Interior Architecture & Design". */
  scope?: string;
  date?: string;
  videoUrl?: string;
  gallery: ProjectImage[];
}

/**
 * Portfolio system. To add a project, append an object here — the listing,
 * the detail page and the sitemap all update automatically.
 * Leave a field undefined and it will not be displayed.
 */
export const projects: Project[] = [
  {
    slug: "the-marble-kitchen",
    propertyType: "Private Residence",
    scope: "Interior Architecture & Design",
    title: "The Marble Kitchen",
    category: "Kitchen Design",
    description:
      "A kitchen conceived as the architectural centre of the home, where stone, joinery and light are resolved as a single composition.",
    hero: { src: kitchenAsset.url, alt: "The Marble Kitchen — hero photograph", aspect: "landscape" },
    concept:
      "The kitchen is treated as a room in its own right rather than a service space. The composition is built around a single continuous surface, with storage and equipment resolved quietly into the joinery so the material can speak without interruption.",
    details:
      "Detailing is reductive: shadow gaps in place of trims, flush faces, and hardware kept to a minimum. The intention is that the eye reads volumes and material, not fittings.",
    space:
      "Circulation is planned so that preparation, cooking and gathering can happen at once without collision — a working kitchen that remains calm enough to entertain in.",
    craft:
      "Stone and joinery are coordinated so that the two meet precisely, with edges and junctions drawn and made rather than left to site.",
    gallery: [
      { src: kitchenAsset.url, alt: "The Marble Kitchen — island and stone surface", aspect: "landscape" },
      { alt: "The Marble Kitchen — joinery detail", aspect: "portrait" },
      { alt: "The Marble Kitchen — material junction detail", aspect: "portrait" },
      { alt: "The Marble Kitchen — wider view of the space", aspect: "wide" },
    ],
  },
  {
    slug: "velvet-master-suite",
    propertyType: "Private Residence",
    scope: "Interior Design & Bespoke Joinery",
    title: "Velvet Master Suite",
    category: "Bedroom Architecture",
    description:
      "A master suite designed as a low-lit, enveloping retreat, with soft materials set against precise architectural lines.",
    hero: { src: bedroomAsset.url, alt: "Velvet Master Suite — hero photograph", aspect: "landscape" },
    concept:
      "The suite is conceived as a single enveloping volume. Rather than a bed placed in a room, the sleeping area, dressing and circulation are drawn together so the space reads as one continuous architectural gesture.",
    details:
      "Soft upholstery is set against sharp reveals and concealed lighting, so the room feels tactile up close and disciplined at a distance.",
    space:
      "Planning separates the quiet zone from dressing and circulation, allowing the suite to function for two people at different hours without disturbance.",
    craft:
      "Upholstery, panelling and metalwork are detailed to meet cleanly, with alignment carried through from the headboard across the wall.",
    gallery: [
      { src: bedroomAsset.url, alt: "Velvet Master Suite — bed and panelled wall", aspect: "landscape" },
      { alt: "Velvet Master Suite — upholstery detail", aspect: "portrait" },
      { alt: "Velvet Master Suite — lighting detail", aspect: "portrait" },
      { alt: "Velvet Master Suite — full room view", aspect: "wide" },
    ],
  },
  {
    slug: "modern-villa-entry",
    propertyType: "Private Villa",
    scope: "Interior Architecture & Design",
    title: "Modern Villa Entry",
    category: "Living Area",
    description:
      "An arrival sequence and living area planned around height, light and a restrained material palette.",
    hero: { src: entryAsset.url, alt: "Modern Villa Entry — hero photograph", aspect: "landscape" },
    concept:
      "The entry is designed as a threshold: a compression at the door opening into height and light beyond, so arrival is experienced rather than simply passed through.",
    details:
      "A restrained palette allows the architecture to carry the space, with joinery and stone used to define edges instead of decoration.",
    space:
      "Sightlines from the entrance are composed deliberately, framing the living area and the openings beyond it.",
    craft:
      "Floor, wall and joinery lines are set out from a shared grid so that junctions align across the whole sequence.",
    gallery: [
      { src: entryAsset.url, alt: "Modern Villa Entry — entrance and stair", aspect: "landscape" },
      { alt: "Modern Villa Entry — architectural detail", aspect: "portrait" },
      { alt: "Modern Villa Entry — living area", aspect: "portrait" },
      { alt: "Modern Villa Entry — wide interior view", aspect: "wide" },
    ],
  },
];

export const pillars = [
  {
    number: "01",
    title: "Design",
    body: "A complete design language tailored to the architecture, lifestyle, and identity of every client.",
  },
  {
    number: "02",
    title: "Detail",
    body: "Materials, lighting, furniture, proportions, and bespoke elements considered as one complete experience.",
  },
  {
    number: "03",
    title: "Delivery",
    body: "Design expertise supported by real-world experience in construction, execution, and project coordination.",
  },
] as const;

export const journey = [
  "Idea",
  "Design",
  "Visualization",
  "Planning",
  "Engineering",
  "FF&E",
  "Creation",
] as const;

export const method = [
  {
    number: "01",
    title: "Discover",
    body: "Understanding the client's lifestyle, property, requirements, and vision.",
  },
  {
    number: "02",
    title: "Design",
    body: "Developing the spatial concept, design direction, materials, lighting, and defining details.",
  },
  {
    number: "03",
    title: "Develop",
    body: "Transforming the concept into technical documentation and an execution strategy.",
  },
  {
    number: "04",
    title: "Deliver",
    body: "Supporting the project through design development and implementation to the finished space.",
  },
] as const;

/** Add verified client testimonials here; the section stays hidden while empty. */
export const testimonials: { quote: string; author: string }[] = [];

export const studioSummary = {
  heading: "A Studio Built on Experience.",
  body: "WS DESIGNHOUSE brings together interior architecture, construction knowledge, and bespoke furniture expertise to create spaces that are deeply considered and beautifully executed.",
  credibility: [
    "25+ Years Experience",
    "International Background",
    "Design + Construction Expertise",
  ],
} as const;

export const founder = {
  name: "Dr. Wessam Abdellatif",
  heading: "About Me",
  portrait: founderPortraitAsset.url,
  bio: [
    "I began my professional journey in the late 1990s, working in real estate design—an experience that laid the foundation for my understanding of space, function, and the built environment. In 2000, I pursued an MBA at The American University in Cairo, but soon realized that my true passion lay elsewhere: design.",
    "Following that realization, I transitioned fully into the creative field. My career took me to Canada, where I founded and managed a furniture business while also overseeing operations within a construction company. This hands-on experience gave me a deep, practical understanding of both design execution and project management.",
    "Driven by a desire to refine my craft, I pursued formal education in interior design at Eastern College in Halifax. I then advanced my academic journey in the United Kingdom, earning both a Master's degree and a PhD from Leeds international college LESL.",
    "Today, I am based in Cairo, where I continue to push the boundaries of interior design. My vision goes beyond aesthetics—I aim to challenge outdated practices, address the limitations within the industry, and introduce a new way of thinking about space, purpose, and human experience.",
    "I believe design has the power not only to transform spaces, but to elevate lifestyles and inspire communities. My mission is to contribute to a more thoughtful, innovative, and inspiring built environment—one that allows society to truly shine.",
  ],
} as const;
