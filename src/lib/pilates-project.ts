import type { PortfolioProject, GalleryImage } from "./egypt-projects";
const photo = (
  id: number,
  label: string,
  crop: GalleryImage["crop"],
  contain = false,
): GalleryImage => ({
  src: `/media/pilates/0${id}.webp`,
  label,
  width: 591,
  height: 1280,
  crop,
  contain,
});
const film = (id: number, label: string): GalleryImage => ({
  src: `/media/pilates/film-0${id}.mp4`,
  label,
  width: 576,
  height: 720,
  crop: [0, 0, 576, 720],
  kind: "video",
});
export const pilatesProject: PortfolioProject = {
  name: "Hot Pilates Studio",
  country: "USA",
  code: "us",
  category: "Wellness · Design proposal",
  description:
    "A Los Angeles studio concept bringing movement and atmosphere together through warm neutral finishes, burgundy accents, mirrors, and layered lighting.",
  gallery: [
    film(2, "Reformer studio film"),
    film(1, "Hot studio film"),
    photo(1, "Main studio", [0, 315, 591, 917]),
    photo(2, "Hot studio", [0, 325, 591, 914]),
    photo(3, "Reception", [0, 324, 591, 914]),
    photo(4, "Designed for movement", [0, 220, 591, 958], true),
  ],
};
