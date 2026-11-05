import { MotionConfig } from "framer-motion";
import { Loader } from "@/components/Loader";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Work } from "@/components/Work";
import { Numbers } from "@/components/Numbers";
import { Contact, Education } from "@/components/Contact";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain">
        <a href="#about" className="sr-only z-[80] rounded bg-paper px-3 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
        <Loader />
        <Nav />
        <main>
          <Hero />
          <div className="hairline" />
          <About />
          <Skills />
          <Experience />
          <Work />
          <Numbers />
          <Education />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}
