import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import About from "../components/sections/About";
import Process from "../components/sections/Process";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 bg-tech-grid overflow-x-hidden transition-colors duration-300">
      <BackgroundAmbient />
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

function BackgroundAmbient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute left-1/2 -top-[180px] h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent dark:from-blue-600/15 dark:via-indigo-600/10 dark:to-transparent blur-[130px]" />

      {/* Mid Right Indigo Accent */}
      <div className="absolute -right-[120px] top-[25%] h-[500px] w-[500px] rounded-full bg-indigo-500/5 dark:bg-indigo-600/10 blur-[140px]" />

      {/* Mid Left Sky Accent */}
      <div className="absolute -left-[120px] top-[55%] h-[500px] w-[500px] rounded-full bg-sky-500/5 dark:bg-sky-600/10 blur-[140px]" />
    </div>
  );
}
