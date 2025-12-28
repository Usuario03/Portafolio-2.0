"use client";

import { motion } from "framer-motion";

const technologies = [
  { 
    name: "React", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    type: "Biblioteca Principal", 
    rarity: "legendary" 
  },
  { 
    name: "Next.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    type: "Framework React", 
    rarity: "legendary" 
  },
  { 
    name: "TypeScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    type: "Lenguaje Tipado", 
    rarity: "legendary" 
  },
  { 
    name: "Tailwind", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    type: "Framework CSS", 
    rarity: "epic" 
  },
  { 
    name: "JavaScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    type: "Lenguaje Base", 
    rarity: "epic" 
  },
  { 
    name: "Git", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    type: "Control de Versiones", 
    rarity: "epic" 
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    type: "Runtime JavaScript", 
    rarity: "rare" 
  },
  { 
    name: "CSS3", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    type: "Estilos", 
    rarity: "rare" 
  },
];

const rarityColors = {
  legendary: "from-[#ffa500] to-[#ff8800]",
  epic: "from-[#9333ea] to-[#7e22ce]",
  rare: "from-[#3b82f6] to-[#2563eb]",
};

const rarityGlow = {
  legendary: "shadow-[0_0_20px_rgba(255,165,0,0.5)]",
  epic: "shadow-[0_0_15px_rgba(147,51,234,0.4)]",
  rare: "shadow-[0_0_10px_rgba(59,130,246,0.3)]",
};

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
          className="group relative overflow-hidden bg-card-souls border-2 border-souls-default hover-border-bonfire transition-all duration-300 p-1"
        >
          {/* Efecto de brillo superior */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${rarityColors[tech.rarity as keyof typeof rarityColors]} opacity-0 group-hover:opacity-100 transition-opacity`} />

          {/* Contenido */}
          <div className="relative flex flex-col items-center justify-center p-4 space-y-2 h-full">
            {/* Icono con efecto de levitación */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 filter drop-shadow-[0_0_8px_rgba(69,162,158,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(255,165,0,0.7)] transition-all"
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Nombre */}
            <span className="text-sm font-bold text-souls hover:text-bonfire transition-colors font-mono tracking-wider">
              {tech.name}
            </span>

            {/* Tipo de item (aparece en hover) */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileHover={{ opacity: 1, height: "auto" }}
              className="text-xs text-[#45a29e] font-mono text-center leading-tight"
            >
              {tech.type}
            </motion.div>
          </div>

          {/* Efecto de partículas en hover */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: "50%", y: "50%" }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1.5, 0],
                  x: `${50 + (i - 1) * 30}%`,
                  y: `${50 + (i % 2 ? 20 : -20)}%`
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute w-1 h-1 bg-[#ffa500] rounded-full"
              />
            ))}
          </div>

          {/* Marco de rareza */}
          <div className={`absolute -top-1 -right-1 w-8 h-8 bg-linear-to-br ${rarityColors[tech.rarity as keyof typeof rarityColors]} opacity-20 blur-sm`} />
        </motion.div>
      ))}
    </div>
  );
}
