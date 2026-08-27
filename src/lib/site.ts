/**
 * Single source of truth for all WS DESIGNHOUSE content.
 * Edit this file to update contact details, services, projects and copy.
 * Only verified, supplied information is stored here — never invent details.
 */

import kitchenAsset from "@/assets/kitchen.png.asset.json";
import bedroomAsset from "@/assets/bedroom.png.asset.json";
import entryAsset from "@/assets/entry.png.asset.json";


export const site = {
  name: "WS DESIGNHOUSE",
  tagline: "Design Spaces… Creating Dreams",
  positioning: "Interior Architecture Specialists",
  serviceLine:
    "End-to-End Interior Design | Visualization • Planning • Engineering • FF&E",
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
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
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
    slug: "interior-design",
    title: "Interior Design",
    short:
      "Complete interior design solutions tailored to the client's lifestyle and requirements.",
    intro:
      "A complete residential interior design service, shaped around how you actually live.",
    body: [
      "Interior design at WS DESIGNHOUSE begins with the client, not the catalogue. We study how a home is used across a day and a season — where light falls, where people gather, where quiet is needed — and design from those observations outward.",
      "The result is a scheme where layout, materials, lighting and furniture are decided together rather than in isolation. Every surface, junction and finish is specified as part of one considered whole.",
      "The service covers concept development, material and finish selection, lighting design, joinery detailing and full documentation for execution.",
    ],
    hasPage: true,
  },
  {
    slug: "interior-architecture",
    title: "Interior Architecture",
    short: "Space planning and structural redesign for luxury residences.",
    intro:
      "Reshaping the architecture of a home so the plan itself supports the way you live.",
    body: [
      "Interior architecture is the difference between decorating a room and designing a space. We work at the level of the plan — walls, openings, ceiling heights, circulation and sightlines — to resolve how a residence is organised before any finish is chosen.",
      "This is the discipline that turns an awkward villa or apartment layout into a home with proportion, generosity and flow.",
      "Interior architecture vs. interior decoration: decoration dresses what already exists; interior architecture questions it. Both matter — we simply start with the harder question first.",
    ],
    hasPage: true,
  },
  {
    slug: "visualization",
    title: "Visualization",
    short:
      "Professional visualization to help communicate and explore the design vision.",
    intro: "Seeing the space before it is built, so decisions are made with confidence.",
    body: [
      "Visualization is a design tool, not a sales image. We use it to test proportion, material combinations and light, and to give clients a clear, honest understanding of what is being proposed.",
      "Reviewing a space visually — including immersive 360° walkthroughs where appropriate — removes ambiguity long before construction begins.",
    ],
    hasPage: true,
  },
  {
    slug: "planning",
    title: "Planning",
    short:
      "Thoughtful planning focused on space, function and the overall design journey.",
    intro: "The quiet discipline that makes everything downstream possible.",
    body: [
      "Planning covers both the spatial plan and the project plan: how rooms relate to one another, and how the stages of design and delivery follow each other without friction.",
      "Careful planning protects the design intent through every later stage of the project.",
    ],
    hasPage: true,
  },
  {
    slug: "engineering",
    title: "Engineering",
    short:
      "Integrated engineering consideration as part of the end-to-end project process.",
    intro: "Technical coordination considered as part of the design, not after it.",
    body: [
      "Engineering considerations — services routing, lighting infrastructure, ventilation, and the technical requirements of joinery and finishes — are integrated into the design process from an early stage.",
      "Considering them alongside the design avoids the compromises that appear when technical requirements are discovered late.",
    ],
    hasPage: true,
  },
  {
    slug: "ffe",
    title: "FF&E",
    short:
      "Furniture, Fixtures & Equipment carefully considered as part of the complete interior environment.",
    intro: "Furniture, fixtures and equipment specified as part of one environment.",
    body: [
      "FF&E is where an interior becomes habitable. Every piece is selected or designed in relation to the architecture around it — scale, material, tone and use.",
      "We schedule, specify and coordinate FF&E as an integral part of the interior rather than a final decorative layer.",
    ],
    hasPage: true,
  },
  {
    slug: "bespoke-furniture",
    title: "Bespoke Furniture",
    short: "Custom designed artisanal pieces tailored to the client's exact taste.",
    intro: "Pieces made for one space, and one client.",
    body: [
      "When a space asks for something that does not exist, we design it. Bespoke furniture allows dimensions, materials and detailing to answer the room exactly — a kitchen island sized to its marble slab, a headboard proportioned to its wall.",
      "Each piece is developed through drawings and material selection, then made by craftsmen working to those drawings.",
    ],
    hasPage: true,
  },
  {
    slug: "project-management",
    title: "Project Management",
    short: "End-to-end execution with meticulous attention to detail.",
    intro: "One studio accountable from first sketch to final handover.",
    body: [
      "End-to-end delivery means the people who designed the space are the people who see it built. We coordinate trades, review workmanship against the drawings, and manage the sequence of works on site.",
      "Meticulous attention at this stage is what separates a rendered idea from a finished space.",
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
    title: "The Marble Kitchen",
    category: "Kitchen Design",
    description:
      "A kitchen conceived as the architectural centre of the home, where stone, joinery and light are resolved as a single composition.",
    hero: { alt: "The Marble Kitchen — hero photograph", aspect: "wide" },
    concept:
      "The kitchen is treated as a room in its own right rather than a service space. The composition is built around a single continuous surface, with storage and equipment resolved quietly into the joinery so the material can speak without interruption.",
    details:
      "Detailing is reductive: shadow gaps in place of trims, flush faces, and hardware kept to a minimum. The intention is that the eye reads volumes and material, not fittings.",
    space:
      "Circulation is planned so that preparation, cooking and gathering can happen at once without collision — a working kitchen that remains calm enough to entertain in.",
    craft:
      "Stone and joinery are coordinated so that the two meet precisely, with edges and junctions drawn and made rather than left to site.",
    gallery: [
      { alt: "The Marble Kitchen — island and stone surface", aspect: "landscape" },
      { alt: "The Marble Kitchen — joinery detail", aspect: "portrait" },
      { alt: "The Marble Kitchen — material junction detail", aspect: "portrait" },
      { alt: "The Marble Kitchen — wider view of the space", aspect: "wide" },
    ],
  },
  {
    slug: "velvet-master-suite",
    title: "Velvet Master Suite",
    category: "Bedroom Architecture",
    description:
      "A master suite designed as a low-lit, enveloping retreat, with soft materials set against precise architectural lines.",
    hero: { alt: "Velvet Master Suite — hero photograph", aspect: "wide" },
    concept:
      "The suite is conceived as a single enveloping volume. Rather than a bed placed in a room, the sleeping area, dressing and circulation are drawn together so the space reads as one continuous architectural gesture.",
    details:
      "Soft upholstery is set against sharp reveals and concealed lighting, so the room feels tactile up close and disciplined at a distance.",
    space:
      "Planning separates the quiet zone from dressing and circulation, allowing the suite to function for two people at different hours without disturbance.",
    craft:
      "Upholstery, panelling and metalwork are detailed to meet cleanly, with alignment carried through from the headboard across the wall.",
    gallery: [
      { alt: "Velvet Master Suite — bed and panelled wall", aspect: "landscape" },
      { alt: "Velvet Master Suite — upholstery detail", aspect: "portrait" },
      { alt: "Velvet Master Suite — lighting detail", aspect: "portrait" },
      { alt: "Velvet Master Suite — full room view", aspect: "wide" },
    ],
  },
  {
    slug: "modern-villa-entry",
    title: "Modern Villa Entry",
    category: "Living Area",
    description:
      "An arrival sequence and living area planned around height, light and a restrained material palette.",
    hero: { alt: "Modern Villa Entry — hero photograph", aspect: "wide" },
    concept:
      "The entry is designed as a threshold: a compression at the door opening into height and light beyond, so arrival is experienced rather than simply passed through.",
    details:
      "A restrained palette allows the architecture to carry the space, with joinery and stone used to define edges instead of decoration.",
    space:
      "Sightlines from the entrance are composed deliberately, framing the living area and the openings beyond it.",
    craft:
      "Floor, wall and joinery lines are set out from a shared grid so that junctions align across the whole sequence.",
    gallery: [
      { alt: "Modern Villa Entry — entrance and stair", aspect: "landscape" },
      { alt: "Modern Villa Entry — architectural detail", aspect: "portrait" },
      { alt: "Modern Villa Entry — living area", aspect: "portrait" },
      { alt: "Modern Villa Entry — wide interior view", aspect: "wide" },
    ],
  },
];

export const pillars = [
  {
    number: "01",
    title: "Bespoke",
    body: "Every space is designed around the client's lifestyle, personality and requirements.",
  },
  {
    number: "02",
    title: "Architectural",
    body: "Design goes beyond decoration. We shape the architecture of how you live.",
  },
  {
    number: "03",
    title: "End-to-End",
    body: "From concept to execution, every stage is carefully considered and managed.",
  },
  {
    number: "04",
    title: "Artisanal",
    body: "Bespoke furniture and carefully selected materials complete the space.",
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
    title: "Consultation",
    body: "Understanding your unique lifestyle and aesthetic requirements.",
  },
  {
    number: "02",
    title: "Curation",
    body: "Selecting artisanal materials and detailing the architectural vision.",
  },
  {
    number: "03",
    title: "Creation",
    body: "Meticulous execution and on-site management for a perfect finish.",
  },
] as const;

/** Add verified client testimonials here; the section stays hidden while empty. */
export const testimonials: { quote: string; author: string }[] = [];

export const founder = {
  name: "Dr. Wessam Abdellatif",
  heading: "About Me",
  /** Replace with a genuine professional portrait when available. */
  portrait: undefined as string | undefined,
  bio: [
    "I began my professional journey in the late 1990s, working in real estate design—an experience that laid the foundation for my understanding of space, function, and the built environment. In 2000, I pursued an MBA at The American University in Cairo, but soon realized that my true passion lay elsewhere: design.",
    "Following that realization, I transitioned fully into the creative field. My career took me to Canada, where I founded and managed a furniture business while also overseeing operations within a construction company. This hands-on experience gave me a deep, practical understanding of both design execution and project management.",
    "Driven by a desire to refine my craft, I pursued formal education in interior design at Eastern College in Halifax. I then advanced my academic journey in the United Kingdom, earning both a Master's degree and a PhD from Leeds international college LESL.",
    "Today, I am based in Cairo, where I continue to push the boundaries of interior design. My vision goes beyond aesthetics—I aim to challenge outdated practices, address the limitations within the industry, and introduce a new way of thinking about space, purpose, and human experience.",
    "I believe design has the power not only to transform spaces, but to elevate lifestyles and inspire communities. My mission is to contribute to a more thoughtful, innovative, and inspiring built environment—one that allows society to truly shine.",
  ],
} as const;
