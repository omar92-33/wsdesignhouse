import type { GalleryImage, PortfolioProject } from "./egypt-projects";

// View boxes exclude the Instagram interface without changing the source images.
const shot = (
  id: number,
  label: string,
  crop: GalleryImage["crop"] = [0, 220, 591, id < 8 ? 1008 : 958],
  contain = true,
): GalleryImage => ({
  src: `/media/austria/${String(id).padStart(2, "0")}.webp`,
  label,
  width: 591,
  height: 1280,
  crop,
  contain,
});

export const austriaProject: PortfolioProject = {
  name: "Alpine House",
  country: "Austria",
  code: "at",
  category: "Interior Design",
  description:
    "A warm, layered home framed by lake views, with natural stone, timber, and soft lighting connecting the living spaces, kitchen, and a carefully considered lower level.",
  gallery: [
    shot(1, "Living room and lake view", [0, 410, 591, 978], false),
    shot(2, "Fireplace and integrated joinery"),
    shot(3, "Stone, texture, and living room details"),
    shot(4, "Sculptural stone kitchen island"),
    shot(5, "Kitchen — stone meets timber"),
    shot(6, "Kitchen lighting and material palette"),
    shot(7, "Dining space for everyday gathering"),
    shot(8, "Basement garage"),
    shot(9, "Mudroom — storage and arrival"),
    shot(10, "Mudroom — integrated joinery"),
    shot(11, "Wine corner and seating"),
    shot(12, "Wine cellar"),
  ],
};
