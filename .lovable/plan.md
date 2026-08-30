# Sticky WhatsApp Button — Homepage

Add a fixed green WhatsApp action button to the bottom-right of the homepage that stays visible while scrolling.

## What will change

1. **New component** `src/components/site/WhatsAppFloat.tsx`
   - Circular WhatsApp-green button with the WhatsApp icon.
   - Links to `whatsappUrl()` from `src/lib/site.ts` using the existing number `201002583892` (matches `+20 100 258 3892`).
   - `target="_blank" rel="noopener noreferrer"` and an `aria-label` for accessibility.
   - Fixed `bottom-6 right-6` positioning, elevated with shadow.
   - Subtle entrance animation and hover/active scale feedback.
   - Hidden when `prefers-reduced-motion` is not relevant, but respects reduced motion for the entrance animation.

2. **Homepage integration** in `src/routes/index.tsx`
   - Import and render `<WhatsAppFloat />` inside the `Home` component, outside the main content flow so it floats above all sections.

3. **Visual treatment**
   - WhatsApp brand green `#25D366` with a white icon.
   - Size ~56px on desktop, ~48px on mobile.
   - Safe z-index above overlays but below the mobile menu.

## Scope

- Homepage only, as requested.
- No changes to navigation, footer, contact form, or other pages.
- No fabrication; uses the verified WhatsApp number already stored in `src/lib/site.ts`.
