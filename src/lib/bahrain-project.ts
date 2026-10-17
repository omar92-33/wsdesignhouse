import type { PortfolioProject } from "./egypt-projects";

export const bahrainProject: PortfolioProject = {
  name: "Jidhafs Retreat",
  country: "Bahrain",
  code: "bh",
  category: "Residential",
  description: "A private resort at home in Jidhafs, Bahrain. Discover the project in the full studio film.",
  gallery: [{
    src: "https://i.ytimg.com/vi/CbfKkhzxho0/hqdefault.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=CbfKkhzxho0",
    label: "Jidhafs project film — watch on YouTube",
    width: 480,
    height: 360,
    crop: [0, 45, 480, 315],
    contain: true,
  }],
};
