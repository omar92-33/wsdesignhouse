import type { GalleryImage, PortfolioProject } from "./egypt-projects";

// Frame the supplied artwork while keeping the original screenshots intact.
const shot = (
  id: number,
  label: string,
  crop: GalleryImage["crop"] = [0, 220, 591, 958],
  contain = true,
): GalleryImage => ({
  src: `/media/saudi/${String(id).padStart(2, "0")}.webp`,
  label,
  width: 591,
  height: 1280,
  crop,
  contain,
});

export const saudiProject: PortfolioProject = {
  name: "Family Farm",
  country: "Saudi Arabia",
  code: "sa",
  category: "Architecture & Interior",
  description:
    "A family retreat bringing architecture, interiors, and landscape together through shaded courtyards, welcoming gathering spaces, and productive gardens.",
  gallery: [
    shot(7, "Arrival and main entrance", [0, 575, 591, 925], false),
    shot(10, "Family hospitality — interior gathering space"),
    shot(11, "Private courtyard and pool"),
    shot(9, "Climate-responsive courtyard architecture"),
    shot(4, "Garden paths and family spaces"),
    shot(3, "Shaded gardens and water features"),
    shot(2, "Architecture and landscape masterplan"),
    shot(5, "Productive gardens and cultivated landscape"),
    shot(8, "Working landscape and greenhouses"),
    shot(6, "Family farm — overall site vision"),
    shot(1, "The original site — from desert to oasis"),
  ],
};
