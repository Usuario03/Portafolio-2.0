"use client";

/**
 * Componente FogReveal - Efecto de revelado con niebla
 * Componente wrapper que añade animación de aparición
 * con efecto de desenfoque (niebla) al entrar en viewport
 * Inspirado en las cinemáticas de Dark Souls
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Props del componente FogReveal
 */
interface FogRevealProps {
  children: ReactNode;                              // Contenido a animar
  delay?: number;                                   // Retraso antes de iniciar animación (segundos)
  direction?: 'up' | 'down' | 'left' | 'right';   // Dirección desde donde aparece
  className?: string;                               // Clases CSS adicionales
}

const FogReveal = ({ 
  children, 
  delay = 0,                    // Por defecto sin retraso
  direction = 'up',            // Por defecto aparece desde abajo
  className = '' 
}: FogRevealProps) => {
  
  /**
   * Offsets iniciales según la dirección de aparición
   * Define desde dónde comienza la animación
   */
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: 'blur(10px)',
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        x: 0,
      }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FogReveal;
