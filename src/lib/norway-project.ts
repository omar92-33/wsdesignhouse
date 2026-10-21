import type { PortfolioProject } from "./egypt-projects";

export const norwayProject: PortfolioProject = {
  name: "Nordic Dock",
  country: "Norway",
  code: "no",
  category: "Outdoor Living & Landscape",
  description: "A waterfront retreat with a timber dock, sheltered lounge, and outdoor dining, framed by Norway’s rocky shoreline and warm evening lighting.",
  gallery: [
    "Waterfront terrace — daylight",
    "Dock and pergola — evening aerial",
    "Coastal house and outdoor living",
    "Illuminated dock — evening overview",
  ].map((label, index) => ({
    src: `/media/norway/render-${String(index + 1).padStart(2, "0")}.webp`,
    label,
    width: 443,
    height: 306,
    crop: [0, 0, 443, 306],
    contain: true,
  })),
};
