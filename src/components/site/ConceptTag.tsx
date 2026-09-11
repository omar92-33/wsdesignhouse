/**
 * Small, explicit disclosure used above concept / competition work so it is
 * never mistaken for a completed client project.
 */
export function ConceptTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="label inline-flex items-center border border-border bg-muted px-4 py-2 text-foreground/70">
      {children}
    </p>
  );
}
