import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileDown } from "lucide-react";
import { greetings, profile } from "@/content";

const CharacterScene = lazy(() => import("./Character"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function SpeechBubble({ still }: { still: boolean }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState(still ? greetings[0] : "");
  useEffect(() => {
    if (still) { setText(greetings[0]); return; }
    const full = greetings[i];
    let n = 0;
    const type = setInterval(() => {
      n += 1;
      setText(full.slice(0, n));
      if (n >= full.length) clearInterval(type);
    }, 38);
    const next = setTimeout(() => setI((v) => (v + 1) % greetings.length), 3800);
    return () => { clearInterval(type); clearTimeout(next); };
  }, [i, still]);
  return (
    <div className="pointer-events-none absolute left-[56%] top-[1%] z-10 sm:top-[3%]">
      <div className="relative rounded-2xl rounded-bl-sm border border-line bg-paper px-4 py-2.5 text-[14px] font-medium text-ink shadow-[0_10px_40px_-10px_rgb(0_0_0/.6)]">
        <span aria-live="polite">{text}</span>
        <span aria-hidden className="ml-0.5 inline-block h-3.5 w-[2px] translate-y-0.5 animate-pulse bg-ink/70" />
        <span aria-hidden className="absolute -bottom-2 left-3 h-3 w-3 rotate-45 border-b border-r border-line bg-paper" />
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion() ?? false;
  const waveSignal = useRef(1);
  const [gl, setGl] = useState(true);
  useEffect(() => setGl(hasWebGL()), []);

  // wave every ~9 s while idle
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => (waveSignal.current += 1), 9000);
    return () => clearInterval(t);
  }, [reduce]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const item = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: 1.25 + d, ease },
  });

  return (
    <section id="top" aria-label="Introduction" className="gutter relative overflow-hidden pt-24 md:pt-28">
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-amber/10 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-tide/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-page items-center gap-6 pb-16 md:grid-cols-[1.08fr_1fr] md:pb-24">
        <div className="order-2 space-y-7 md:order-1">
          <motion.p {...item(0)} className="label flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="inline-flex items-center gap-2 text-tide">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tide opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-tide" /></span>
              Open to roles
            </span>
            <span>·</span>
            <span>{profile.location}</span>
          </motion.p>
          <motion.h1 {...item(0.08)} className="balance text-[clamp(2.9rem,7.4vw,6rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
            Venkata Gopi <span className="font-serif font-normal italic tracking-[-0.01em] text-amber">Perumalla</span>
          </motion.h1>
          <motion.p {...item(0.16)} className="flex flex-wrap gap-x-2 font-mono text-sm text-dim">
            <span>{profile.title} <span className="text-line">/</span></span>
            <span>{profile.focus} <span className="text-line">/</span></span>
            <span>{profile.years} years</span>
          </motion.p>
          <motion.p {...item(0.24)} className="balance max-w-xl font-serif text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.15] text-paper/90">
            {profile.tagline}
          </motion.p>
          <motion.div {...item(0.32)} className="flex flex-wrap gap-3 pt-2">
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-[15px] font-semibold text-ink transition-transform hover:-translate-y-0.5">
              Explore my work <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[15px] font-medium text-paper transition-colors hover:border-paper/60">
              Let's connect <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-3 py-3.5 text-[15px] font-medium text-dim underline-offset-4 transition-colors hover:text-paper hover:underline">
              <FileDown className="h-4 w-4" /> Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease }}
          className="relative order-1 mx-auto aspect-square w-full max-w-[520px] md:order-2"
        >
          {gl ? (
            <button
              type="button"
              onClick={() => (waveSignal.current += 1)}
              aria-label="Animated 3D character of Venkata Gopi. Click to make him wave."
              className="absolute inset-0 cursor-pointer rounded-full"
            >
              <Suspense fallback={<div className="absolute inset-[22%] animate-pulse rounded-full bg-panel" />}>
                <CharacterScene waveSignal={waveSignal} still={reduce} />
              </Suspense>
            </button>
          ) : (
            <div className="absolute inset-[18%] grid place-items-center rounded-full border border-line bg-panel font-serif text-7xl italic text-amber">vg</div>
          )}
          <SpeechBubble still={reduce} />
        </motion.div>
      </div>

      <a href="#id-card" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-dim md:flex">
        <span className="label">Scroll</span>
        <span className="h-10 w-px overflow-hidden bg-line"><span className="block h-4 w-px animate-[drip_1.8s_ease-in-out_infinite] bg-amber" /></span>
      </a>
    </section>
  );
}
