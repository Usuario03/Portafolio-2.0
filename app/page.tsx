"use client";

/**
 * Página Principal del Portafolio
 * Componente raíz que organiza todas las secciones:
 * - Barra de navegación sticky
 * - Hero con hoguera interactiva
 * - Sección Sobre Mí
 * - Grid de proyectos
 * - Línea de tiempo de experiencia
 * - Formación académica
 * - Footer
 * - Barra de stamina decorativa
 */

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import ProjectsGrid from "./components/projects/ProjectsGrid";
import ExperienceTimeline from "./components/experience/ExperienceTimeline";
import Education from "./components/education/Education";
import Footer from "./components/footer/Footer";
import StaminaBar from "./components/StaminaBar";

export default function Home() {
  return (
    <>
      <StaminaBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <ExperienceTimeline />
        <Education />
      </main>
      <Footer />
    </>
  );
}
