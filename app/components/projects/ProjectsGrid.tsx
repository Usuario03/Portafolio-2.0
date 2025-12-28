"use client";

/**
 * Componente ProjectsGrid - Sección de proyectos destacados
 * Muestra un grid responsive de tarjetas de proyectos
 * Cada proyecto incluye: título, descripción, icono, tecnologías y link a GitHub
 * Diseño inspirado en Dark Souls con efectos de niebla
 */

import { useLanguage } from "../../contexts/LanguageContext";
import ProjectCard from "./ProjectCard";
import FogReveal from "../FogReveal";
import { Puzzle, ShoppingCart, Ticket, CalendarClock, UserCircle } from "lucide-react";

export default function ProjectsGrid() {
  // Hook para obtener traducciones
  const { t } = useLanguage();

  /**
   * Datos complementarios de proyectos
   * Las traducciones (título/descripción) vienen de t.projects.items
   * Aquí se definen:
   * - image: Componente de icono Lucide
   * - tags: Array de tecnologías utilizadas
   * - githubUrl: Enlace al repositorio
   */
  const projectsData = [
    { image: <Puzzle size={80} className="text-[#45a29e]" />, tags: ["React", "Vite", "Tailwind CSS", "State Management"], githubUrl: "https://github.com/Usuario03/Proyecto-Extension" },
    { image: <ShoppingCart size={80} className="text-[#45a29e]" />, tags: ["React", "Zustand", "Vite", "Tailwind CSS"], githubUrl: "https://github.com/Usuario03/Cart-main" },
    { image: <Ticket size={80} className="text-[#45a29e]" />, tags: ["React", "Vite", "Tailwind CSS", "Form Validation"], githubUrl: "https://github.com/Usuario03/Ticket-Generator" },
    { image: <CalendarClock size={80} className="text-[#45a29e]" />, tags: ["Node.js", "MongoDB", "Express", "JavaScript"], githubUrl: "https://github.com/Usuario03/Agenda" },
    { image: <UserCircle size={80} className="text-[#45a29e]" />, tags: ["React", "Vite", "Tailwind CSS", "Animations"], githubUrl: "https://github.com/Usuario03/Portafolio" },
  ];

  return (
    <section id="proyectos" className="py-20 bg-souls-primary relative overflow-hidden">
      {/* Efecto de textura de fondo */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(69, 162, 158, 0.1) 2px, rgba(69, 162, 158, 0.1) 4px)`
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FogReveal>
          <div className="text-center mb-16">
            {/* Título estilo Dark Souls */}
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-souls mb-6 tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {t.projects.title}
            </h2>
            
            {/* Línea decorativa */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-32 bg-linear-to-r from-transparent via-[#ffa500] to-[#ffa500]" />
              <div className="w-2 h-2 bg-[#ffa500] rotate-45" />
              <div className="h-px w-32 bg-linear-to-l from-transparent via-[#ffa500] to-[#ffa500]" />
            </div>
          </div>
        </FogReveal>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project: any, index: number) => (
            <ProjectCard 
              key={project.title} 
              title={project.title}
              description={project.description}
              image={projectsData[index].image}
              tags={projectsData[index].tags}
              githubUrl={projectsData[index].githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
