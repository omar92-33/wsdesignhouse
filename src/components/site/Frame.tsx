import type { ProjectImage } from "@/lib/site";

const ratios: Record<string, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[3/2]",
  wide: "aspect-[16/9]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

/**
 * Renders real photography when `src` is provided.
 * Until then it renders a calm, clearly-labelled placeholder frame —
 * no stock or generated imagery is ever presented as studio work.
 */
export function Frame({
  image,
  aspect,
  className = "",
  caption,
  tone = "light",
  priority = false,
}: {
  image?: ProjectImage | undefined;
  aspect?: keyof typeof ratios | undefined;
  className?: string | undefined;
  caption?: string | undefined;
  tone?: "light" | "dark" | undefined;
  priority?: boolean | undefined;
}) {
  const ratio = ratios[aspect ?? image?.aspect ?? "landscape"];
  const alt = image?.alt ?? caption ?? "";

  if (image?.src) {
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

  const dark = tone === "dark";

  return (
    <div
      role="img"
      aria-label={alt || "Photography placeholder"}
      className={`relative overflow-hidden ${ratio} ${
        dark ? "bg-ink/90 text-ivory/60" : "bg-muted text-muted-foreground"
      } ${className}`}
    >
      <div
        aria-hidden
        className={`absolute inset-3 border sm:inset-5 ${dark ? "border-ivory/15" : "border-border"}`}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: dark
            ? "linear-gradient(135deg, oklch(0.22 0.006 90) 0%, oklch(0.16 0.006 90) 100%)"
            : "linear-gradient(135deg, oklch(0.955 0.008 85) 0%, oklch(0.9 0.012 85) 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <span className="rule-accent" aria-hidden />
        <span className="label opacity-80">Photography</span>
        {(caption || image?.alt) && (
          <span className="max-w-xs font-display text-lg leading-snug opacity-70">
            {caption ?? image?.alt}
          </span>
        )}
      </div>
    </div>
  );
}
