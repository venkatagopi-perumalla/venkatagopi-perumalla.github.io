import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import clsx from "clsx";
import { featured, moreProjects } from "@/content";
import { Reveal, Section, SectionHead, Tag } from "./ui";

export function Work() {
  const [shot, setShot] = useState(0);
  const [more, setMore] = useState(false);
  const s = featured.shots[shot];

  return (
    <Section id="work">
      <SectionHead
        id="work-h"
        index="04"
        kicker="Selected work"
        title={<>{featured.thesis.split(" only ")[0]} <em className="text-amber">only</em> {featured.thesis.split(" only ")[1]}</>}
        intro="My flagship build: a microservices platform on Amazon EKS where CI never touches the cluster. It builds, scans and pushes images, commits the new tag to Git, and Argo CD does the rest."
      />

      <Reveal>
        <article className="overflow-hidden rounded-3xl border border-line bg-panel">
          {/* screen */}
          <div className="border-b border-line bg-[#0e1317] p-3 sm:p-5">
            <div className="mb-3 flex items-center gap-1.5 px-1" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ea7870]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e2cd78]" /><span className="h-2.5 w-2.5 rounded-full bg-[#84cc8c]" />
              <span className="ml-3 truncate font-mono text-[11px] text-dim">github.com/venkatagopi-perumalla/eks-gitops-platform</span>
            </div>
            <div className="relative overflow-hidden rounded-xl bg-white" style={{ aspectRatio: "1344 / 760" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={s.src}
                  src={s.src}
                  width={s.w}
                  height={s.h}
                  alt={s.alt}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className={clsx("absolute inset-0 h-full w-full", s.caption === "Incident & recovery" || s.caption === "CI pipeline" ? "bg-[#111217] object-contain" : "object-contain")}
                />
              </AnimatePresence>
            </div>
            <div role="tablist" aria-label="Project screenshots" className="mt-3 flex flex-wrap gap-2">
              {featured.shots.map((x, i) => (
                <button key={x.src} role="tab" aria-selected={i === shot} onClick={() => setShot(i)}
                  className={clsx("rounded-full px-3 py-1.5 font-mono text-[11px] transition-colors", i === shot ? "bg-amber text-ink" : "border border-line text-dim hover:text-paper")}>
                  {x.caption}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_300px]">
            <div className="min-w-0">
              <p className="label">{featured.when} · Personal project</p>
              <h3 className="mt-2 text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-tight tracking-tight">{featured.name}</h3>
              <ul className="mt-6 space-y-3">
                {featured.points.slice(0, more ? undefined : 2).map((p) => (
                  <li key={p} className="flex gap-3 text-[15.5px] leading-relaxed text-paper/85">
                    <span className="mt-2.5 h-1 w-3 shrink-0 bg-amber/70" />{p}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => setMore((m) => !m)} aria-expanded={more} className="mt-4 inline-flex items-center gap-2 text-sm text-tide hover:text-paper">
                <Plus className={clsx("h-4 w-4 transition-transform", more && "rotate-45")} /> {more ? "Show less" : `Read all ${featured.points.length} highlights`}
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">{featured.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
              <div className="flex flex-col gap-2">
                <a href={featured.repo} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between rounded-xl bg-amber px-5 py-3.5 font-semibold text-ink">
                  View the code <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a href={featured.rca} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between rounded-xl border border-line px-5 py-3.5 text-paper hover:border-paper/50">
                  Read the incident RCA <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-16">
        <Reveal><p className="label mb-6">More builds</p></Reveal>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {moreProjects.map((p, i) => (
            <li key={p.name} className="bg-ink">
              <Reveal delay={i * 0.05} className="h-full">
                <a href={p.url} target="_blank" rel="noreferrer" className="group flex h-full flex-col gap-4 p-7 transition-colors hover:bg-panel">
                  <span className="flex items-start justify-between gap-4">
                    <span className="font-mono text-lg text-paper group-hover:text-amber">{p.name}</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-dim">{p.blurb}</span>
                  <span className="mt-auto flex flex-wrap gap-2">{p.tags.map((t) => <Tag key={t}>{t}</Tag>)}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
