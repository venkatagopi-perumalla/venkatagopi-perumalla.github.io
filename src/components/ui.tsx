import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

export function Reveal({ children, delay = 0, className, y = 24 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHead({ index, kicker, title, intro, id }: { index: string; kicker: string; title: ReactNode; intro?: ReactNode; id: string }) {
  return (
    <Reveal className="mb-12 grid gap-4 md:mb-16 md:grid-cols-[180px_1fr]">
      <p className="label pt-3">
        <span className="text-amber">{index}</span> — {kicker}
      </p>
      <div className="space-y-4">
        <h2 id={id} className="balance font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] leading-[0.98] tracking-[-0.01em]">
          {title}
        </h2>
        {intro && <p className="max-w-2xl text-[17px] leading-relaxed text-dim">{intro}</p>}
      </div>
    </Reveal>
  );
}

export function Section({ id, children, className }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={clsx("gutter relative py-24 md:py-36", className)}>
      <div className="mx-auto max-w-page">{children}</div>
    </section>
  );
}

export function Tag({ children, tone = "line" }: { children: ReactNode; tone?: "line" | "amber" | "tide" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] leading-none",
        tone === "line" && "border-line text-dim",
        tone === "amber" && "border-amber/40 bg-amber/10 text-amber",
        tone === "tide" && "border-tide/40 bg-tide/10 text-tide",
      )}
    >
      {children}
    </span>
  );
}
