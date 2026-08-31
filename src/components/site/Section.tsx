import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px] ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string | undefined }) {
  return (
    <p className={`label flex items-center gap-4 text-champagne ${className}`}>
      <span className="h-px w-8 bg-champagne" aria-hidden />
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string | undefined;
}) {
  return (
    <header className="bg-ink pb-20 pt-36 text-ivory lg:pb-20 lg:pt-36 xl:pb-28 xl:pt-48">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-7 max-w-4xl text-[clamp(2.75rem,7vw,5rem)] xl:text-[clamp(3rem,7vw,6.5rem)]">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-xl text-base leading-relaxed opacity-65 sm:text-lg">{intro}</p>
        )}
      </Container>
    </header>
  );
}
