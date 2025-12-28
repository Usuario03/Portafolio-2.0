"use client";

/**
 * Componente ProjectCard - Tarjeta individual de proyecto
 * Estilo inspirado en Dark Souls con efecto de "enemigo derrotado"
 * Incluye animaciones al entrar en viewport y hover
 */

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

// Props del componente
interface ProjectCardProps {
  title: string;              // Título del proyecto
  description: string;        // Descripción del proyecto
  image: React.ReactNode;     // Ícono o imagen (componente Lucide)
  tags: string[];            // Tecnologías utilizadas
  githubUrl?: string;        // URL del repositorio (opcional)
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
}: ProjectCardProps) {
  // Estado para animación de "proyecto completado" (enemigo derrotado)
  const [isDefeated, setIsDefeated] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onViewportEnter={() => setTimeout(() => setIsDefeated(true), 300)}
      className="group relative bg-card-souls rounded-none overflow-hidden border-2 border-souls-default hover-border-bonfire transition-all duration-500 shadow-bonfire-hover"
    >
      {/* Marco decorativo estilo Dark Souls */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#45a29e] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#45a29e] to-transparent" />

      {/* Banner de proyecto completado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isDefeated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-4 left-0 right-0 text-center z-20"
      >
        <span 
          className="inline-block px-6 py-2 bg-[#e8e4d9]/90 dark:bg-[#0b0c10]/90 border border-bonfire text-bonfire text-xs tracking-[0.3em] font-bold"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {t.projects.completed}
        </span>
      </motion.div>

      {/* Imagen del proyecto - Oscura al inicio */}
      <div className="relative h-48 overflow-hidden bg-souls-secondary">
        <motion.div 
          initial={{ filter: 'grayscale(100%) brightness(0.3)' }}
          whileHover={{ filter: 'grayscale(0%) brightness(1)' }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="group-hover:scale-110 transition-transform duration-500">
            {image}
          </div>
        </motion.div>
        
        {/* Efecto de niebla */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        {/* Título estilo lore */}
        <h3 
          className="text-xl font-bold text-souls hover:text-bonfire transition-colors duration-300 tracking-wide"
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          {title}
        </h3>
        
        {/* Línea decorativa */}
        <div className="h-px bg-linear-to-r from-sheikah/50 via-sheikah to-sheikah/50" />

        {/* Descripción estilo item description */}
        <p className="text-souls/80 text-sm leading-relaxed font-mono">
          {description}
        </p>

        {/* Tags como Atributos */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-sheikah/10 text-sheikah border border-sheikah/30 hover:bg-sheikah/20 hover:border-sheikah transition-all"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botón de GitHub */}
        {githubUrl && (
          <div className="pt-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 w-full border-2 border-sheikah text-sheikah hover:bg-sheikah/10 hover:shadow-[0_0_15px_rgba(13,148,136,0.3)] dark:hover:shadow-[0_0_15px_rgba(69,162,158,0.3)] transition-all font-mono text-xs tracking-wider font-bold"
            >
              <span>{t.projects.viewCode}</span>
            </a>
          </div>
        )}
      </div>

      {/* Efecto de partículas al hacer hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 bg-[#ffa500] rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
