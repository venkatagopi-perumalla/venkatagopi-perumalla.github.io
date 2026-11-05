import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const LINES = [
  "$ terraform apply -auto-approve",
  "  module.vpc … created",
  "  module.eks … created",
  "$ argocd app sync portfolio",
  "  portfolio  Synced  Healthy ✓",
];

export function Loader() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) { setDone(true); return; }
    let i = 0;
    const tick = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= LINES.length) {
        clearInterval(tick);
        setTimeout(() => setDone(true), 380);
      }
    }, 210);
    return () => clearInterval(tick);
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          aria-hidden
          className="fixed inset-0 z-[70] grid place-items-center bg-ink"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
        >
          <div className="w-[min(420px,86vw)] font-mono text-[13px] leading-7">
            {LINES.slice(0, shown).map((l, i) => (
              <div key={i} className={l.startsWith("$") ? "text-paper" : l.includes("✓") ? "text-tide" : "text-dim"}>{l}</div>
            ))}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-amber" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
