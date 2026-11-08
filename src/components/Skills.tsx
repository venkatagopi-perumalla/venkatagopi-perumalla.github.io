import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { alsoSkills, skillGroups } from "@/content";
import { Reveal, Section, SectionHead } from "./ui";

type Flat = { n: number; sym: string; name: string; note: string; group: string; label: string; hue: string };

export function Skills() {
  const all: Flat[] = useMemo(() => {
    let n = 0;
    return skillGroups.flatMap((g) => g.items.map((it) => ({ ...it, n: ++n, group: g.id, label: g.label, hue: g.hue })));
  }, []);
  const [sel, setSel] = useState<Flat>(all[0]);
  const [hoverGroup, setHoverGroup] = useState<string | null>(null);

  return (
    <Section id="skills">
      <SectionHead
        id="skills-h"
        index="02"
        kicker="Skills"
        title={<>The periodic table of <em className="text-tide">my stack</em>.</>}
        intro={`${all.length} elements I work with, grouped by where they sit in the delivery path. Pick any tile to see where I've actually used it.`}
      />

      <Reveal>
        <div role="group" aria-label="Skill groups" className="mb-6 flex flex-wrap gap-2">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onMouseEnter={() => setHoverGroup(g.id)}
              onMouseLeave={() => setHoverGroup(null)}
              onFocus={() => setHoverGroup(g.id)}
              onBlur={() => setHoverGroup(null)}
              onClick={() => setSel(all.find((a) => a.group === g.id)!)}
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[13px] text-dim transition-colors hover:text-paper"
            >
              <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: `rgb(${g.hue})` }} />
              {g.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <ul className="grid grid-cols-3 gap-2 min-[480px]:grid-cols-4 sm:grid-cols-5 md:grid-cols-6" aria-label="Skills">
            {all.map((el) => {
              const active = sel.n === el.n;
              const dimmed = hoverGroup && hoverGroup !== el.group;
              return (
                <li key={el.n}>
                  <button
                    type="button"
                    onClick={() => setSel(el)}
                    aria-pressed={active}
                    aria-label={`${el.name}, ${el.label}`}
                    className={clsx(
                      "group relative flex aspect-square w-full flex-col justify-between rounded-lg border p-2.5 text-left transition-all duration-300",
                      active ? "-translate-y-1 border-transparent" : "border-line hover:-translate-y-1",
                      dimmed ? "opacity-30" : "opacity-100",
                    )}
                    style={{
                      background: active ? `rgb(${el.hue} / .16)` : "rgb(var(--panel))",
                      boxShadow: active ? `0 0 0 1px rgb(${el.hue}), 0 14px 40px -12px rgb(${el.hue} / .55)` : undefined,
                      ["--h" as string]: el.hue,
                    }}
                  >
                    <span className="flex items-start justify-between font-mono text-[10px] text-dim">
                      <span className="tabular">{el.n}</span>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: `rgb(${el.hue})` }} />
                    </span>
                    <span className="font-serif text-[clamp(1.6rem,3vw,2.3rem)] leading-none transition-colors" style={{ color: active ? `rgb(${el.hue})` : undefined }}>
                      {el.sym}
                    </span>
                    <span className="line-clamp-2 text-[10.5px] leading-tight text-dim group-hover:text-paper">{el.name}</span>
                    <span aria-hidden className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: `inset 0 0 24px rgb(${el.hue} / .25)` }} />
                  </button>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <aside aria-live="polite" className="sticky top-24 overflow-hidden rounded-2xl border border-line bg-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={sel.n}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-24 w-24 place-items-center rounded-xl font-serif text-5xl" style={{ background: `rgb(${sel.hue} / .14)`, color: `rgb(${sel.hue})`, boxShadow: `inset 0 0 0 1px rgb(${sel.hue} / .5)` }}>
                    {sel.sym}
                  </span>
                  <span className="font-mono text-xs text-dim tabular">No. {sel.n}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{sel.name}</h3>
                <p className="label mt-1" style={{ color: `rgb(${sel.hue})` }}>{sel.label}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/85">{sel.note}</p>
              </motion.div>
            </AnimatePresence>
          </aside>
        </Reveal>
      </div>

      {alsoSkills.length > 0 && (
        <Reveal>
          <p className="mt-8 max-w-4xl text-[15px] leading-relaxed text-dim">
            <span className="label mr-2 text-paper/80">Also</span>
            {alsoSkills.join(" · ")}
          </p>
        </Reveal>
      )}
    </Section>
  );
}
