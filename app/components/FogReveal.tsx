"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FogRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FogReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: FogRevealProps) => {
  
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
