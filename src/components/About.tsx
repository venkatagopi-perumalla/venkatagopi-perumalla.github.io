import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { RotateCw } from "lucide-react";
import { certification, courses, focusAreas, profile } from "@/content";
import { Reveal, Section, SectionHead } from "./ui";

function IdentityCard() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 150, damping: 18 });
  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <div className="mx-auto w-full max-w-[380px] [perspective:1200px]" id="id-card">
      <motion.div
        ref={ref}
        onPointerMove={(e) => {
          if (reduce || !ref.current) return;
          const r = ref.current.getBoundingClientRect();
          mx.set((e.clientX - r.left) / r.width - 0.5);
          my.set((e.clientY - r.top) / r.height - 0.5);
        }}
        onPointerLeave={() => { mx.set(0); my.set(0); }}
        style={{ rotateX: reduce ? 0 : rx, rotateY: reduce ? 0 : ry, transformStyle: "preserve-3d" }}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        className="relative"
      >
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          aria-pressed={flipped}
          aria-label={flipped ? "Show the front of the ID card" : "Flip the ID card to read the summary"}
          className="relative block aspect-[5/7] w-full text-left [transform-style:preserve-3d] transition-transform duration-700 [transition-timing-function:cubic-bezier(.22,1,.36,1)]"
          style={{ transform: `rotateY(${flipped ? 180 : 0}deg)` }}
        >
          {/* front */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-[22px] border border-line bg-gradient-to-br from-[#1a232b] via-panel to-[#10161b] p-6 [backface-visibility:hidden] shadow-[0_40px_80px_-30px_rgb(0_0_0/.8)]">
            <motion.div aria-hidden style={{ left: glareX }} className="pointer-events-none absolute -top-1/2 h-[200%] w-24 -translate-x-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/[.06] to-transparent" />
            <div className="flex items-center justify-between">
              <span className="label">Engineer ID</span>
              <span className="font-mono text-[11px] text-amber">EKS · GITOPS</span>
            </div>
            <div className="mt-7 grid h-24 w-24 place-items-center rounded-2xl border border-amber/40 bg-amber/10 font-serif text-5xl italic text-amber">vg</div>
            <div className="mt-6 space-y-1">
              <p className="text-2xl font-semibold leading-tight tracking-tight">{profile.name}</p>
              <p className="text-dim">{profile.title}</p>
            </div>
            <dl className="mt-auto grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-4 text-[13px]">
              <div><dt className="label">Base</dt><dd>{profile.location}</dd></div>
              <div><dt className="label">Experience</dt><dd>{profile.years} years</dd></div>
              <div className="col-span-2"><dt className="label">Certified</dt><dd>AWS Solutions Architect – Associate</dd></div>
            </dl>
            <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-[11px] text-dim"><RotateCw className="h-3 w-3" /> tap to flip</span>
          </div>
          {/* back */}
          <div className="absolute inset-0 flex flex-col rounded-[22px] border border-line bg-panel p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="label">Summary</span>
            <p className="mt-4 text-[15px] leading-relaxed text-paper/90">{profile.summary}</p>
            <p className="mt-4 text-[13px] text-dim">{profile.workRight}.</p>
            <div aria-hidden className="mt-auto flex h-10 items-end gap-[3px] opacity-70">
              {"8f2a1c9e0b7d4e3a6f5c2b1a0d9e8f7c6b5a".split("").map((c, i) => (
                <span key={i} className="w-[3px] bg-paper" style={{ height: `${30 + (parseInt(c, 16) / 15) * 70}%` }} />
              ))}
            </div>
            <span className="mt-2 font-mono text-[11px] text-dim">commit 8f2a1c9 · main</span>
          </div>
        </button>
      </motion.div>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHead
        id="about-h"
        index="01"
        kicker="About"
        title={<>I make releases <em className="text-amber">boring</em> — in the best way.</>}
        intro="Most of my work happens between a developer's commit and a customer's request: the pipelines, clusters and alerts that make shipping routine. Recently I've been rebuilding that whole path myself, end to end, and writing up what breaks."
      />
      <div className="grid items-start gap-14 lg:grid-cols-[380px_1fr] lg:gap-20">
        <Reveal><IdentityCard /></Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {focusAreas.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col gap-3 bg-ink p-7 transition-colors hover:bg-panel">
                <span className="font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")} · {f.k}</span>
                <h3 className="text-xl font-semibold tracking-tight">{f.title}</h3>
                <p className="text-[15px] leading-relaxed text-dim">{f.body}</p>
              </article>
            </Reveal>
          ))}
          <Reveal className="sm:col-span-2">
            <a href={certification.url} target="_blank" rel="noreferrer" className="flex flex-wrap items-center justify-between gap-3 bg-ink p-7 transition-colors hover:bg-panel">
              <span>
                <span className="label block">Certification</span>
                <span className="mt-1 block text-lg font-semibold">{certification.name}</span>
              </span>
              <span className="font-mono text-sm text-tide">Verify on Credly ↗</span>
            </a>
          </Reveal>
          {courses.length > 0 && (
            <Reveal className="sm:col-span-2">
              <div className="bg-ink p-7">
                <span className="label block">Continuous learning</span>
                <ul className="mt-3 space-y-2">
                  {courses.map((c) => {
                    const inner = (
                      <>
                        <span className="text-[15px] text-paper/90">{c.name}</span>
                        <span className="font-mono text-xs text-dim">{c.provider}{c.year ? ` · ${c.year}` : ""}{c.url ? " ↗" : ""}</span>
                      </>
                    );
                    return (
                      <li key={c.name}>
                        {c.url ? (
                          <a href={c.url} target="_blank" rel="noreferrer" className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 hover:text-amber">{inner}</a>
                        ) : (
                          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">{inner}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
