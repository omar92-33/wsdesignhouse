import type { PortfolioProject } from "./egypt-projects";
export const australiaProject: PortfolioProject = {
  name: "Party House",
  country: "Australia",
  code: "au",
  category: "Residential",
  description:
    "An expressive residence designed for social gatherings, atmosphere, and immersive moments.",
  gallery: [
    {
      kind: "video",
      src: "/media/australia/party-house-web.mp4",
      poster: "/media/australia/party-house-poster.jpg",
      label: "Australia project film",
      width: 1080,
      height: 1914,
      crop: [0, 0, 1080, 1914],
    },
    {
      src: "/media/portfolio-preview/australia.jpg",
      label: "The space",
      width: 1024,
      height: 1280,
      crop: [52, 475, 972, 1130],
    },
    {
      src: "/media/portfolio-preview/australia.jpg",
      label: "Presentation reference",
      width: 1024,
      height: 1280,
      crop: [0, 0, 1024, 1280],
      contain: true,
    },
  ],
};
