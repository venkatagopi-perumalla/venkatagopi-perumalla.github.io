import { useEffect, useState } from "react";
import clsx from "clsx";
import { profile } from "@/content";

const LINKS = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["work", "Work"],
  ["contact", "Contact"],
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <header
      className={clsx(
        "gutter fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-line/70 bg-ink/80 backdrop-blur-md" : "border-b border-transparent",
      )}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-page items-center justify-between gap-6">
        <a href="#top" className="font-serif text-2xl italic text-paper" aria-label={`${profile.name}, back to top`}>
          vg<span className="text-amber">.</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={clsx("transition-colors hover:text-paper", active === id ? "text-paper" : "text-dim")} aria-current={active === id ? "true" : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="rounded-full border border-amber/50 px-4 py-2 text-sm text-amber transition-colors hover:bg-amber hover:text-ink">
          Let's talk
        </a>
      </nav>
    </header>
  );
}
