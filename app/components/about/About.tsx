"use client";

/**
 * Componente About - Sección "Sobre Mí"
 * Muestra información personal, descripción profesional y stack tecnológico
 * Diseño tipo pergamino/item de Dark Souls con efectos decorativos
 */

import { useLanguage } from "../../contexts/LanguageContext";
import TechStack from "./TechStack";
import FogReveal from "../FogReveal";
import { motion } from "framer-motion";

export default function About() {
  // Hook para obtener traducciones según idioma activo
  const { t } = useLanguage();

  return (
    <section
      id="sobre-mi"
      className="py-20 bg-section-souls relative overflow-hidden"
    >
      {/* Efecto de textura de pergamino con líneas verticales */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(197, 198, 199, 0.1) 2px, rgba(197, 198, 199, 0.1) 4px)`
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FogReveal>
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-bold text-souls mb-6 tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {t.about.title}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-32 bg-linear-to-r from-transparent via-[#45a29e] to-[#45a29e]" />
              <span className="text-2xl">✦</span>
              <div className="h-px w-32 bg-linear-to-l from-transparent via-[#45a29e] to-[#45a29e]" />
            </div>
          </div>
        </FogReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Columna Izquierda - Pergamino de Descripción */}
          <FogReveal direction="left">
            <div className="relative bg-card-souls border-2 border-souls-default p-8 space-y-6">
              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-bonfire" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-bonfire" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-bonfire" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-bonfire" />

              {/* Header tipo Item */}
              <div className="border-b border-sheikah/30 pb-4">
                <h3 
                  className="text-2xl font-bold text-bonfire mb-2 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {t.about.subtitle}
                </h3>
                <p className="text-sheikah text-sm font-mono tracking-wider">
                  {t.about.degree}
                </p>
              </div>

              {/* Descripción estilo lore */}
              <div className="space-y-4">
                <p className="text-souls/90 leading-relaxed text-sm">
                  {t.about.description1}
                </p>
                
                <p className="text-souls/80 leading-relaxed text-sm">
                  {t.about.description2}
                </p>
              </div>

              {/* Atributos */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sheikah/30">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-[#d4cbb8]/50 dark:bg-[#0b0c10]/50 p-3 border border-sheikah/20"
                >
                  <div className="w-8 h-8 rounded-full bg-sheikah/20 flex items-center justify-center">
                    <span className="text-sheikah font-bold">I</span>
                  </div>
                  <div>
                    <p className="text-sheikah text-xs font-mono">{t.about.education}</p>
                    <p className="text-souls text-sm font-semibold">{t.about.educationValue}</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-[#d4cbb8]/50 dark:bg-[#0b0c10]/50 p-3 border border-bonfire/20"
                >
                  <div className="w-8 h-8 rounded-full bg-bonfire/20 flex items-center justify-center">
                    <span className="text-bonfire font-bold">E</span>
                  </div>
                  <div>
                    <p className="text-bonfire text-xs font-mono">{t.about.experience}</p>
                    <p className="text-souls text-sm font-semibold">{t.about.experienceValue}</p>
                  </div>
                </motion.div>
              </div>

              {/* Efecto runa brillante */}
              <div className="absolute -top-2 -right-2 w-12 h-12 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-4xl"
                >
                  ✦
                </motion.div>
              </div>
            </div>
          </FogReveal>

          {/* Columna Derecha - Inventario de Habilidades */}
          <FogReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h3 
                  className="text-3xl font-bold text-souls mb-2 tracking-wide"
                  style={{ fontFamily: 'Cinzel, serif' }}
                >
                  {t.about.techStack}
                </h3>
                <p className="text-[#45a29e] text-sm font-mono">
                  {t.about.techStackSubtitle}
                </p>
              </div>
              <TechStack />
            </div>
          </FogReveal>
        </div>
      </div>
    </section>
  );
}
