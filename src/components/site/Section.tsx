import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-5 sm:px-8 ${className}`}>{children}</div>
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
    <header className="bg-ink pb-24 pt-40 text-ivory lg:pb-32 lg:pt-52">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="display mt-8 max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)]">{title}</h1>
        {intro && (
          <p className="mt-8 max-w-xl text-base leading-relaxed opacity-65 sm:text-lg">{intro}</p>
        )}
      </Container>
    </header>
  );
}
