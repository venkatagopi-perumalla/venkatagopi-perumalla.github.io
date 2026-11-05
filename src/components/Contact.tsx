import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, BadgeCheck, FileDown } from "lucide-react";
import { education, profile } from "@/content";
import { Reveal, Section } from "./ui";

export function Education() {
  return (
    <Section id="education" className="!py-20 md:!py-28">
      <div className="grid gap-10 md:grid-cols-[180px_1fr]">
        <Reveal><p className="label pt-1"><span className="text-amber">06</span> — Education</p></Reveal>
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {education.map((e, i) => (
            <li key={e.degree} className="bg-ink">
              <Reveal delay={i * 0.06} className="flex h-full flex-col gap-2 p-7">
                <span className="font-mono text-xs text-dim">{e.when}</span>
                <span className="text-xl font-semibold leading-snug tracking-tight">{e.degree}{e.level && <span className="font-normal text-dim"> · {e.level}</span>}</span>
                <span className="text-dim">{e.school}, {e.place}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const r = document.createRange();
      const el = document.getElementById("email-text");
      if (el) { r.selectNodeContents(el); const s = getSelection(); s?.removeAllRanges(); s?.addRange(r); }
    }
  };
  const links = [
    { href: profile.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: profile.github, label: "GitHub", icon: Github },
    { href: profile.credly, label: "AWS certification", icon: BadgeCheck },
  ];
  return (
    <section id="contact" aria-labelledby="contact-h" className="gutter relative overflow-hidden pb-16 pt-28 md:pt-40">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-amber/[.08] blur-[130px]" />
      <div className="relative mx-auto max-w-page">
        <Reveal><p className="label"><span className="text-amber">07</span> — Contact</p></Reveal>
        <Reveal delay={0.05}>
          <h2 id="contact-h" className="balance mt-6 text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
            Got a platform <br className="hidden sm:block" />that needs <span className="font-serif font-normal italic text-amber">calm hands?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-dim">
            I'm based in {profile.location} with full right to work (Stamp 1G), and open to DevOps, platform and cloud engineering roles. The quickest way to reach me is email.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href={`mailto:${profile.email}`} className="group inline-flex min-w-0 items-center gap-3 rounded-full bg-paper px-6 py-4 text-ink">
              <Mail className="h-5 w-5 shrink-0" />
              <span id="email-text" className="truncate text-[clamp(.95rem,2.4vw,1.15rem)] font-semibold">{profile.email}</span>
            </a>
            <button type="button" onClick={copy} className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-4 text-sm text-paper hover:border-paper/50">
              {copied ? <Check className="h-4 w-4 text-tide" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy email"}
            </button>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-amber/50 px-5 py-4 text-sm text-amber transition-colors hover:bg-amber hover:text-ink">
              <FileDown className="h-4 w-4" /> Download CV (PDF)
            </a>
            <span role="status" className="sr-only">{copied ? "Email address copied" : ""}</span>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={label} className="bg-ink">
                <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-3 p-6 transition-colors hover:bg-panel">
                  <span className="flex items-center gap-3"><Icon className="h-5 w-5 text-amber" />{label}</span>
                  <span className="text-dim transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <footer className="mt-24 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-dim sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, Three.js and a lot of YAML · hosted on GitHub Pages</span>
        </footer>
      </div>
    </section>
  );
}
