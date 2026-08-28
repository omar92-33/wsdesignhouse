# Premium Scrolling & Menu Motion — Mobile + Desktop

Smooth scrolling is currently initialised, but on mobile it is undermined by two things in the code: the mobile menu locks scrolling with `document.body.style.overflow = "hidden"` (which fights the smooth-scroll engine and leaves the page stuck/janky after closing), and touch scrolling runs with settings that iOS Safari handles poorly. The soft "blur" easing you want also only exists as a faint 2px blur on reveals, not on the scroll itself.

## What will change

### 1. Smooth scrolling that actually works on phones
- Tune the scroll engine for touch: slower, heavier inertia with a long decelerating glide up and down, matched separately for touch and trackpad/wheel so both feel right.
- Stop the mobile menu from breaking scrolling: lock/unlock through the scroll engine itself instead of `body { overflow: hidden }`, and restore position cleanly on close.
- Keep momentum working inside scrollable overlays (menu panel) so nested areas still scroll natively.
- Respect reduced-motion: engine stays off for those users.

### 2. Velocity-linked "blur" feel
- A subtle, scroll-velocity-driven softening: content picks up a very small blur and scale while the page is moving fast, resolving to perfectly sharp when it settles. Capped low (max ~3px) so text never looks broken, and disabled on low-end devices and reduced-motion.
- Section reveals get a longer, softer entrance (blur + rise + fade) with the same easing curve, so scrolling down feels like content is drifting into focus.

### 3. Better menu animations (mobile + desktop)
- Mobile: the full-screen panel opens with a smoother curtain reveal, links stagger in with a deeper offset and softer blur, close button and CTAs animate out in reverse when closing (currently they just vanish).
- Hamburger-to-X gets a refined two-stage motion instead of a straight rotate.
- Desktop: nav links get a refined underline/opacity transition on hover and an animated active indicator; the header's transition to its solid state becomes a smoother fade rather than an abrupt swap.
- All motion stays on `opacity`, `transform`, and `filter` only, so it composites on the GPU and holds 120fps.

### 4. Verification
- Test in a headless browser at both mobile (390px, touch emulation) and desktop widths: confirm inertial scroll on touch, that the menu opens/closes without freezing the page, and that scrolling resumes normally afterwards.

## Technical notes
- `src/components/site/SmoothScroll.tsx`: retune Lenis (separate wheel/touch multipliers, longer duration, `syncTouch` handling suited to iOS), expose a small `useLenis`/global handle so other components can call `stop()`/`start()`.
- `src/components/site/Nav.tsx`: replace the `body.style.overflow` lock with the scroll-engine lock; add exit animations via a `closing` state; refine hamburger and desktop link transitions.
- `src/components/site/Reveal.tsx`: longer blur-in variant, keep the IntersectionObserver + rAF pattern.
- `src/styles.css`: add velocity-blur variables driven from the scroll rAF loop (`--scroll-blur`), tune existing `menu-panel` / `menu-item-in` utilities, add exit keyframes, keep the reduced-motion block authoritative.
