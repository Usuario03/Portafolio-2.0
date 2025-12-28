"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const [bonfireLit, setBonfireLit] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const lightBonfire = () => {
    setBonfireLit(true);
    setTimeout(() => {
      scrollToSection("sobre-mi");
    }, 1500);
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#e8e4d9] dark:bg-[#0b0c10]"
      style={{
        background: 'radial-gradient(circle at center, var(--hero-center), var(--hero-outer))',
      }}
    >
      {/* Efecto de niebla de fondo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxmaWx0ZXIgaWQ9Im5vaXNlIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjAzIi8+PC9zdmc+')] opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          
          {/* Hoguera Central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            {/* La Hoguera */}
            <div 
              onClick={lightBonfire}
              className="relative cursor-pointer group mb-4"
              style={{ width: '200px', height: '200px' }}
            >
              {/* GIF de la Hoguera */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/images/bonfire-dark-souls.gif"
                  alt="Bonfire Dark Souls"
                  className={`w-full h-full object-contain transition-all duration-1000 ${
                    bonfireLit 
                      ? 'drop-shadow-[0_0_50px_rgba(255,165,0,1)] brightness-150 contrast-125 saturate-150' 
                      : 'grayscale brightness-40 opacity-50 group-hover:opacity-70 group-hover:brightness-60'
                  }`}
                  style={{
                    filter: bonfireLit ? 'hue-rotate(-5deg)' : 'none'
                  }}
                />
              </div>

              {/* Resplandor de fondo cuando está encendida */}
              {bonfireLit && (
                <motion.div
                  animate={{ 
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-radial from-[#ffa500]/60 via-[#ff8800]/30 to-transparent rounded-full blur-2xl"
                />
              )}

              {/* Partículas de fuego cuando está encendida */}
              {bonfireLit && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0, opacity: 1, x: 0 }}
                      animate={{ 
                        y: -120, 
                        opacity: 0,
                        x: (Math.random() - 0.5) * 60
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeOut"
                      }}
                      className="absolute bottom-10 left-1/2 w-2 h-2 bg-[#ffa500] rounded-full blur-[1px]"
                    />
                  ))}
                </>
              )}

              {/* Efecto de resplandor cuando se enciende */}
              {bonfireLit && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: [1, 0], scale: [1, 2] }}
                  transition={{ duration: 1, times: [0, 1] }}
                  className="absolute inset-0 bg-[#ffa500]/30 rounded-full blur-3xl"
                />
              )}
            </div>

            {/* Texto de instrucción */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 text-souls text-sm tracking-wider"
            >
              {bonfireLit ? t.hero.welcome : t.hero.touchBonfire}
            </motion.p>
          </motion.div>

          {/* Nombre - Estilo Dark Souls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="space-y-4 mt-8"
          >
            <h1 
              className="text-5xl md:text-7xl font-bold text-souls tracking-wide"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              Jairo Arturo Leal
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-linear-to-r from-transparent via-[#45a29e] to-transparent" />
              <p className="text-xl md:text-2xl text-sheikah font-mono tracking-widest">
                {t.hero.title}
              </p>
              <div className="h-px w-20 bg-linear-to-r from-transparent via-[#45a29e] to-transparent" />
            </div>
          </motion.div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-souls/80 max-w-2xl leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          {/* Botones de acción - Estilo RPG */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <button
              onClick={() => scrollToSection("proyectos")}
              className="group relative px-8 py-4 bg-button-bonfire text-[#2a2419] dark:text-[#0b0c10] rounded font-bold tracking-wide overflow-hidden transition-all hover:scale-105 shadow-bonfire-hover font-souls-mono"
            >
              <span className="relative z-10">VER PROYECTOS</span>
              <div className="absolute inset-0 bg-linear-to-r from-[#ff8800] to-[#ffa500] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="group px-8 py-4 border-2 border-sheikah text-sheikah rounded font-bold tracking-wide transition-all hover:bg-sheikah/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(69,162,158,0.3)]"
              style={{ fontFamily: 'Space Mono, monospace' }}
            >
              SOBRE MÍ
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
