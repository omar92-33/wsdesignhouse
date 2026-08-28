import type { ProjectImage } from "@/lib/site";

const ratios: Record<string, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

/**
 * Renders real photography only. When no image is available the component
 * renders nothing — no placeholder frames, no stock or generated imagery.
 */
export function Frame({
  image,
  aspect,
  className = "",
  caption,
  priority = false,
}: {
  image?: ProjectImage | undefined;
  aspect?: keyof typeof ratios | undefined;
  className?: string | undefined;
  caption?: string | undefined;
  tone?: "light" | "dark" | undefined;
  priority?: boolean | undefined;
}) {
  if (!image?.src) return null;

  const ratio = ratios[aspect ?? image.aspect ?? "landscape"];
  const alt = image.alt ?? caption ?? "";

  return (
    <div className={`relative overflow-hidden ${ratio} ${className}`}>
      <img
        src={image.src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
      />
    </div>
  );
}
