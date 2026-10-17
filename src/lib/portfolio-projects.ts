import { bahrainProject } from "./bahrain-project";
import { swedenProject } from "./sweden-project";
import { serbiaProject } from "./serbia-project";
import { usaGardenProject } from "./usa-garden-project";
import { norwayProject } from "./norway-project";
import { egyptProjects, type PortfolioProject } from "./egypt-projects";
import { pilatesProject } from "./pilates-project";
import { australiaProject } from "./australia-project";
import { saudiProject } from "./saudi-project";
import { italyProject } from "./italy-project";
import { austriaProject } from "./austria-project";

export const portfolioProjects: PortfolioProject[] = [
  bahrainProject, serbiaProject, swedenProject, norwayProject, pilatesProject, usaGardenProject, australiaProject, saudiProject, italyProject, austriaProject, ...egyptProjects,
];

export function projectSlug(project: PortfolioProject) {
  return project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const projectStories: Record<string, { location: string; approach: string; details: string }> = {
  "jidhafs-retreat": {
    location: "Jidhafs, Bahrain",
    approach: "A private resort at home in Jidhafs, Bahrain. Explore the project through the studio film.",
    details: "Watch the full project video on YouTube for a closer look at the spaces and design.",
  },
  "swedish-residence": {
    location: "Sweden",
    approach: "The red timber exterior and dark pitched roofs frame a home organised around its garden. The supplied views explore the extension, arrival, and relationship to the surrounding buildings.",
    details: "Inside, pale timber, textured fabrics, and a warm neutral palette connect the kitchen, dining, and living areas. Bedrooms, workspaces, and integrated storage continue the same material approach.",
  },
  "chocolato-gelato": {
    location: "Serbia",
    approach: "A commercial gelato interior connects the serving counter with relaxed seating and a terrace. Glazed frontage allows the interior atmosphere to become part of the street-facing identity.",
    details: "A sculptural gelato motif anchors the branding, accompanied by ribbed surfaces, green upholstery, terrazzo-style flooring, and softly illuminated ceiling curves. Day and evening views show the changing atmosphere.",
  },
  "garden-residence": {
    location: "USA",
    approach: "A residential exterior brings a pale stone facade and blue-grey gables together with generous glazing and a planted front garden.",
    details: "Six render views explore the street elevation, entrance, facade details, and layered planting. Lawn, flowering borders, and stone edging frame the approach to the home.",
  },
  "nordic-dock": {
    location: "Norway",
    approach: "A waterfront setting brings a timber deck, outdoor dining, and a sheltered lounge together beside a red coastal house.",
    details: "Four views explore the dock in daylight and at dusk, showing the pergola, seating areas, and lighting along the water edge.",
  },
  "hot-pilates-studio": {
    location: "Los Angeles, USA",
    approach: "Movement sets the rhythm of this studio proposal. Reformer stations, mirrored walls, and clear circulation organise the training space, while a warmer reception introduces the material palette.",
    details: "Burgundy upholstery, pale timber, and layered lighting give the spaces distinct moods. The two films explore the brighter reformer room and the more atmospheric hot studio.",
  },
  "party-house": {
    location: "Australia",
    approach: "Designed around gathering, this residence uses light and a central aquarium to create a memorable focal point. The interior brings social spaces together around a shared atmosphere.",
    details: "Curved forms and concealed lighting frame the aquarium, while warm finishes carry through the surrounding spaces. The film offers a closer view of the interior and its details.",
  },
  "family-farm": {
    location: "Saudi Arabia",
    approach: "Architecture, interiors, and landscape form a connected family retreat. The site brings gathering spaces and private courtyards together with gardens and productive landscape.",
    details: "The collection follows the project from site planning to arrival, shaded outdoor spaces, and interior hospitality. Water, planting, and warm materials connect the different areas.",
  },
  "milan-design-loft": {
    location: "Milan, Italy",
    approach: "A double-height living space connects the kitchen, seating, and upper level. Integrated storage keeps the composition ordered while natural materials add warmth to the interior.",
    details: "A stone island anchors the kitchen, timber joinery frames the living area, and suspended lighting draws attention to the height of the space. The film explores these relationships at closer range.",
  },
  "alpine-house": {
    location: "Austria",
    approach: "The living room is arranged around the view and the warmth of the fireplace. Timber, stone, and soft furnishings continue into the kitchen and dining areas, giving the home a coherent material palette.",
    details: "The design extends to the lower level, with a garage, organised mudroom, and wine cellar. Integrated storage and layered lighting connect practical spaces with the character of the main interior.",
  },
  "commercial-office": {
    location: "Egypt",
    approach: "A workplace organised around focus, collaboration, and a clear professional identity. The conference room brings the team together around a generous table and a restrained material palette.",
    details: "Glass partitions, timber finishes, and linear lighting balance openness with definition. The gallery includes workspace views and the supplied planning and design development boards.",
  },
  "kids-bedroom-design": {
    location: "Egypt",
    approach: "Sleeping, studying, and storage are brought together in a calm bedroom layout. Soft textures and green accents create a gentle setting for everyday routines.",
    details: "The gallery explores the sleeping zone, study and vanity, and integrated storage, showing how the different activities fit within one room.",
  },
  "master-bathroom": {
    location: "Egypt",
    approach: "A bathroom composed around warm surfaces, clean lines, and soft light. The vanity, shower, and bathtub each have a defined place within the overall layout.",
    details: "The supplied views move from the complete room to individual bathing and vanity areas, followed by the design overview and layout.",
  },
  "reception-design": {
    location: "Egypt",
    approach: "A reception interior shaped around welcoming and gathering. The composition brings seating, materials, and lighting together as a connected living space.",
    details: "The project gallery presents the supplied interior views and design details, allowing the palette and spatial relationships to be explored from different angles.",
  },
  "guest-bathroom": {
    location: "Egypt",
    approach: "A compact guest bathroom with a considered balance of surfaces, fixtures, and light. The design brings the same attention to everyday use and visual detail as the larger spaces of the home.",
    details: "The supplied gallery documents the room and its details, with close views of the finishes and the arrangement of the bathroom elements.",
  },
};

