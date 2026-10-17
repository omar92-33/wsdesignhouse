import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
const MotionContext = createContext(false);
export const useSiteMotion = () => useContext(MotionContext);
export function MotionExperience({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("ws-motion"); } catch { /* Storage may be unavailable. */ }
      setEnabled(saved ? saved === "full" : !preference.matches);
    };
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    document.documentElement.dataset["motion"] = enabled ? "full" : "reduced";
  }, [enabled]);
  return <MotionContext.Provider value={enabled}>{children}</MotionContext.Provider>;
}
