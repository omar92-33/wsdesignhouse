/**
 * Small, explicit disclosure used above concept / competition work so it is
 * never mistaken for a completed client project.
 */
export function ConceptTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="label inline-flex items-center gap-3 border border-border bg-muted px-4 py-2 text-foreground/70">
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden />
      {children}
    </p>
  );
}
