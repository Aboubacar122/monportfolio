import dynamic from "next/dynamic";
import MatrixRain from "@/components/MatrixRain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import SiemDashboard from "@/components/SiemDashboard";
import Terminal from "@/components/Terminal";
import Contact from "@/components/Contact";

// Three.js côté client uniquement
const NetworkGlobe = dynamic(() => import("@/components/NetworkGlobe"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Navbar />
      <main className="relative">
        {/* Identité */}
        <Hero />
        <About />
        <Skills />

        {/* Parcours pro */}
        <Projects />
        <Experience />
        <Certifications />

        {/* Tech showcase */}
        <SiemDashboard />
        <NetworkGlobe />
        <Terminal />

        {/* Contact */}
        <Contact />
      </main>
    </>
  );
}
