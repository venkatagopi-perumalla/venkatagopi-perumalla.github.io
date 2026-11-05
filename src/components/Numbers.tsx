import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/content";
import { Reveal, Section, SectionHead } from "./ui";

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const fmt = (v: number) => v.toLocaleString("en", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const [shown, setShown] = useState(fmt(value));
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setShown(fmt(v)) });
    return () => c.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce, value]);
  return <span ref={ref} className="tabular">{prefix}{shown}{suffix}</span>;
}

export function Numbers() {
  return (
    <Section id="numbers" className="border-y border-line bg-panel/40">
      <SectionHead id="numbers-h" index="05" kicker="By the numbers" title={<>Receipts, <em className="text-tide">not adjectives</em>.</>} />
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <li key={s.label} className="bg-ink">
            <Reveal delay={i * 0.05} className="flex h-full flex-col gap-2 p-7">
              <span className="font-serif text-[clamp(3rem,6vw,4.6rem)] leading-none text-amber">
                <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="text-[17px] font-medium">{s.label}</span>
              <span className="font-mono text-xs text-dim">{s.sub}</span>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
