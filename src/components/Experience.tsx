import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { experience } from "@/content";
import { Reveal, Section, SectionHead, Tag } from "./ui";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="experience">
      <SectionHead
        id="experience-h"
        index="03"
        kicker="Experience"
        title={<>Four years on the <em className="text-amber">release path</em>.</>}
        intro="From deploying to Tomcat with Jenkins, to Terraform-built EKS, to running production clusters for enterprise clients."
      />
      <ol ref={ref} className="relative ml-2 border-l border-line md:ml-[180px]">
        <motion.span aria-hidden style={{ scaleY: progress }} className="absolute -left-px top-0 h-full w-px origin-top bg-gradient-to-b from-amber via-amber to-tide" />
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <li key={job.org} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
              <span aria-hidden className={clsx("absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-ink transition-colors", isOpen ? "bg-amber" : "bg-line")} />
              <Reveal>
                <p className="font-mono text-xs text-dim">{job.when} · {job.place}</p>
                <h3 className="mt-2 text-[clamp(1.4rem,2.6vw,2rem)] font-semibold leading-tight tracking-tight">
                  {job.role} <span className="font-serif font-normal italic text-dim">at</span> <span className="text-amber">{job.org}</span>
                </h3>
                <p className="mt-3 max-w-2xl text-[17px] text-paper/85">{job.lead}</p>
                <div className="mt-4 flex flex-wrap gap-2">{job.tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-tide hover:text-paper"
                >
                  <Plus className={clsx("h-4 w-4 transition-transform duration-300", isOpen && "rotate-45")} />
                  {isOpen ? "Hide details" : "What I did"}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.ul
                      id={`job-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-3xl overflow-hidden"
                    >
                      {job.points.map((p) => (
                        <li key={p} className="flex gap-3 border-b border-line/60 py-3 text-[15px] leading-relaxed text-dim first:mt-4 last:border-0">
                          <span className="mt-2.5 h-1 w-3 shrink-0 bg-amber/70" />
                          {p}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
