import type { PortfolioProject } from "./egypt-projects";

export const usaGardenProject: PortfolioProject = {
  name: "Garden Residence",
  country: "USA",
  code: "us",
  category: "Residential Exterior & Landscape",
  description: "A welcoming residential exterior with pale stone, blue-grey gables, and generous glazing, framed by flowering borders and a layered front garden.",
  gallery: [
    "Street view and front garden",
    "Front elevation and planting",
    "Stone facade and garden approach",
    "Entrance and landscape overview",
    "Gable and facade details",
    "Flowering border and stone edging",
  ].map((label, index) => ({
    src: `/media/usa-garden/render-${String(index + 1).padStart(2, "0")}.svg`,
    label,
    width: 440,
    height: 307,
    crop: [0, 0, 440, 307],
    contain: true,
  })),
};
