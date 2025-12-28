"use client";

/**
 * Componente ExperienceTimeline - Línea de tiempo de experiencia laboral
 * Muestra la trayectoria profesional en formato de timeline vertical
 * Estilo Dark Souls con camino conectado y marcadores
 * Los datos se cargan desde las traducciones (locales/es.json, en.json)
 */

import { useLanguage } from "../../contexts/LanguageContext";
import FogReveal from "../FogReveal";
import { motion } from "framer-motion";

/**
 * Datos estáticos de experiencia laboral
 * Usados como respaldo y para mantener estructura
 * Los textos traducidos vienen de t.experience.items
 */
const experiences = [
  {
    title: "Auxiliar de Sistema - Administrador de Software de Geotecnia",
    company: "Ingeconsulta",
    period: "Febrero 2022 - Julio 2024",
    achievements: [
      "Elaboración de ensayo de laboratorio",
      "Supervisar y liderar equipo en proyectos de geotecnia",
      "Control de maquinaria y equipos",
      "Administrador de software de geotecnia, mantenimiento de equipos y auxiliar de sistema",
    ],
  },
  {
    title: "Call Center",
    company: "Atento",
    period: "Nov 2020 - Jun 2021",
    achievements: [
      "Atender a usuarios proporcionando información, resolviendo consultas y ofreciendo soluciones a sus necesidades",
      "Desarrollar plan de crecimiento",
      "Capacitación de personal",
      "Resolver incidencias y reclamaciones de manera efectiva",
      "Seguir guías y protocolos establecidos para garantizar la calidad del servicio",
    ],
  },
  {
    title: "Proyectos",
    company: "Desarrollo Personal",
    period: "2023 - Presente",
    achievements: [
      "Desarrollo de una aplicación web y de interfaz interactiva con React, Tailwind CSS, Vite y Zustand",
    ],
  },
];

export default function ExperienceTimeline() {
  // Hook para obtener traducciones
  const { t } = useLanguage();

  return (
    <section id="experiencia" className="py-20 bg-section-souls relative overflow-hidden">
      {/* Efecto de textura de mapa antiguo con puntos */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at center, rgba(69, 162, 158, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de la sección con animación de niebla */}
        <FogReveal>
          <div className="text-center mb-16">
            {/* Título principal estilo Souls */}
            <h2 
              className="text-5xl md:text-6xl font-bold text-souls mb-6 tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {t.experience.title}
            </h2>
            {/* Línea decorativa con diamante central */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-32 bg-linear-to-r from-transparent via-[#ffa500] to-[#ffa500]" />
              <div className="w-2 h-2 bg-[#ffa500] rotate-45" />
              <div className="h-px w-32 bg-linear-to-l from-transparent via-[#ffa500] to-[#ffa500]" />
            </div>
          </div>
        </FogReveal>

        {/* Timeline de experiencias */}
        <div className="max-w-3xl mx-auto">
          {/* Mapeo de items de experiencia desde traducciones */}
          {t.experience.items.map((exp: any, index: number) => (
            <FogReveal key={index} delay={0.2}>
              <div className="relative pl-12 pb-12 last:pb-0">
                {/* Línea vertical estilo camino */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#ffa500] via-[#45a29e] to-[#ffa500]" />

                {/* Marcador de ubicación */}
                <motion.div 
                  initial={{ scale: 0, rotate: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute left-0 top-4 w-6 h-6 -translate-x-2.5"
                >
                  <div className="w-full h-full bg-bonfire rotate-45 border-2 border-[#2a2419] dark:border-[#0b0c10] shadow-[0_0_15px_rgba(217,118,6,0.6)] dark:shadow-[0_0_15px_rgba(255,165,0,0.6)]" />
                  <div className="absolute inset-0 bg-[#ffa500] rotate-45 animate-ping opacity-20" />
                </motion.div>

                {/* Contenido - Estilo Pergamino de Misión */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card-souls border-2 border-souls-default hover-border-bonfire transition-all duration-300 p-6 relative overflow-hidden"
                >
                  {/* Marco decorativo */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#ffa500] to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#45a29e] to-transparent" />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4 border-b border-sheikah/30 pb-3">
                    <div>
                      <h3 
                        className="text-xl font-bold text-[#ffa500] mb-1 tracking-wide"
                        style={{ fontFamily: 'Cinzel, serif' }}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-[#45a29e] font-mono text-sm tracking-wider">
                        📍 {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-souls bg-[#d4cbb8]/80 dark:bg-[#0b0c10]/80 px-3 py-1.5 border border-sheikah/30 font-mono tracking-wider">
                      ⏳ {exp.period}
                    </span>
                  </div>

                  {/* Logros - Estilo Quest Objectives */}
                  <div className="space-y-3">
                    <p className="text-[#ffa500] text-xs font-mono tracking-widest mb-2">
                      {t.experience.achievementsLabel}
                    </p>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement: string, i: number) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <span className="text-[#22c55e] mt-1 shrink-0 text-sm group-hover:scale-125 transition-transform">
                            ✓
                          </span>
                          <span className="text-souls/90 text-sm leading-relaxed font-mono">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Sello de completado */}
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-10">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-5xl"
                    >
                      🏆
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </FogReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
