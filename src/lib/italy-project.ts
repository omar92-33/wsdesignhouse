import type { PortfolioProject } from "./egypt-projects";

export const italyProject: PortfolioProject = {
  name: "Milan Design Loft",
  country: "Italy",
  code: "it",
  category: "Interior Design",
  description:
    "A Milan interior shaped by warm timber, natural stone, and sculptural lighting, bringing everyday living together in a carefully detailed loft.",
  gallery: [
    {
      kind: "video",
      src: "/media/italy/milan-interior-web.mp4",
      poster: "/media/italy/milan-interior-poster.jpg",
      label: "Milan interior film",
      width: 720,
      height: 898,
      crop: [0, 0, 720, 898],
    },
    {
      src: "/media/portfolio-preview/italy.jpg",
      label: "Kitchen and double-height living space",
      width: 1024,
      height: 1280,
      crop: [43, 351, 982, 989],
    },
  ],
};
