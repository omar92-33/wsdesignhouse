export type GalleryImage = {
  youtubeUrl?: string;
  kind?: "video";
  poster?: string;
  src: string;
  label: string;
  width: number;
  height: number;
  crop: [number, number, number, number];
  contain?: boolean;
};
export type PortfolioProject = {
  name: string;
  country: string;
  code: string;
  image?: string;
  category: string;
  description: string;
  crop?: [number, number, number, number];
  gallery?: GalleryImage[];
};
// Original screenshots remain intact. View boxes frame the supplied artwork only.
const shot = (
  id: number,
  label: string,
  crop: GalleryImage["crop"] = [0, 275, 739, 1198],
  contain = true,
): GalleryImage => ({
  src: `/media/egypt/${String(id).padStart(2, "0")}.jpg`,
  label,
  width: 739,
  height: 1600,
  crop,
  contain,
});
export const egyptProjects: PortfolioProject[] = [
  {
    name: "Commercial Office",
    country: "Egypt",
    code: "eg",
    category: "Workspaces",
    description:
      "A commercial office designed to balance functionality, comfort, and a refined professional atmosphere.",
    gallery: [
      shot(1, "Conference room", [38, 643, 739, 1136], false),
      shot(2, "Workspace experience"),
      shot(3, "Design highlights"),
      shot(4, "Space planning"),
      shot(5, "Design development"),
    ],
  },
  {
    name: "Kids Bedroom Design",
    country: "Egypt",
    code: "eg",
    category: "Residential",
    description:
      "A calm, functional kids’ bedroom designed with soft textures, smart storage, and subtle green accents.",
    gallery: [
      shot(6, "Bedroom overview", [0, 563, 739, 1198], false),
      shot(7, "Sleeping zone", [0, 572, 739, 1198], false),
      shot(8, "Study and vanity", [0, 546, 739, 1198], false),
      shot(9, "Design details", [0, 563, 739, 1198], false),
    ],
  },
  {
    name: "Master Bathroom",
    country: "Egypt",
    code: "eg",
    category: "Residential",
    description:
      "A refined master bathroom where warm textures, clean lines, and soft lighting come together.",
    gallery: [
      shot(10, "Master bathroom", [270, 475, 739, 1100], false),
      shot(12, "Vanity detail"),
      shot(13, "Shower area"),
      shot(14, "Bathtub corner"),
      shot(11, "Design overview and layout"),
    ],
  },
  {
    name: "Reception Design",
    country: "Egypt",
    code: "eg",
    category: "Residential",
    description: "A villa reception in New Cairo shaped by elegance, comfort, and effortless flow.",
    // Screenshot 18 has a loading spinner baked into the dining image and is held back.
    gallery: [
      shot(17, "Lounge area", [34, 454, 705, 982], false),
      shot(20, "Reception overview", [35, 434, 707, 929], false),
      shot(19, "Architectural detail", [43, 405, 698, 945], false),
      shot(15, "Reception design presentation"),
      shot(16, "Reception layout"),
    ],
  },
  {
    name: "Guest Bathroom",
    country: "Egypt",
    code: "eg",
    category: "Residential",
    description:
      "A guest bathroom for a villa in New Cairo, balancing warm finishes, elegant details, and practical storage.",
    gallery: [
      shot(23, "Vanity view", [0, 421, 739, 872], false),
      shot(24, "Built-in storage"),
      shot(25, "Powder room view"),
      shot(21, "Guest bathroom presentation"),
      shot(22, "Layout plan"),
    ],
  },
];
