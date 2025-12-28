"use client";

import { useLanguage } from "../../contexts/LanguageContext";
import { useState } from "react";
import FogReveal from "../FogReveal";
import { motion } from "framer-motion";
import { GraduationCap, Database, Braces, Smartphone, ShieldCheck, Settings, Scroll } from "lucide-react";

const certificationIcons = [
  <Database size={32} className="text-[#45a29e]" />,
  <Braces size={32} className="text-[#45a29e]" />,
  <Smartphone size={32} className="text-[#45a29e]" />,
  <ShieldCheck size={32} className="text-[#45a29e]" />,
  <Settings size={32} className="text-[#45a29e]" />,
];

export default function Education() {
  const { t } = useLanguage();
  const [showCertifications, setShowCertifications] = useState(false);

  return (
    <section id="formacion" className="py-20 bg-section-souls relative overflow-hidden">
      {/* Efecto de biblioteca antigua */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(69, 162, 158, 0.1) 25%, rgba(69, 162, 158, 0.1) 26%, transparent 27%, transparent 74%, rgba(69, 162, 158, 0.1) 75%, rgba(69, 162, 158, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(69, 162, 158, 0.1) 25%, rgba(69, 162, 158, 0.1) 26%, transparent 27%, transparent 74%, rgba(69, 162, 158, 0.1) 75%, rgba(69, 162, 158, 0.1) 76%, transparent 77%, transparent)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FogReveal>
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl font-bold text-souls mb-6 tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              {t.education.title}
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-32 bg-linear-to-r from-transparent via-[#45a29e] to-[#45a29e]" />
              <span className="text-2xl">✦</span>
              <div className="h-px w-32 bg-linear-to-l from-transparent via-[#45a29e] to-[#45a29e]" />
            </div>
          </div>
        </FogReveal>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Formación Principal - Gran Tomo Legendario */}
          <FogReveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-linear-to-br from-bonfire/10 to-[#d97706]/5 dark:from-[#ffa500]/10 dark:to-[#ff8800]/5 border-4 border-bonfire p-8 overflow-hidden"
            >
              {/* Efecto de brillo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ffa500] to-transparent animate-pulse" />
              
              {/* Esquinas decorativas */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-bonfire" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-bonfire" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-bonfire" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-bonfire" />

              <div className="flex items-start gap-6 relative z-10">
                <motion.div 
                  className="filter drop-shadow-[0_0_15px_rgba(255,165,0,0.7)]"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <GraduationCap size={60} className="text-[#ffa500]" />
                </motion.div>
                <div className="flex-1">
                  <h3 
                    className="text-3xl font-bold text-[#ffa500] mb-2 tracking-wide"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {t.education.main.degree}
                  </h3>
                  <p className="text-[#45a29e] font-mono tracking-wider">
                    📍 {t.education.main.institution}
                  </p>
                </div>
              </div>

              {/* Partículas brillantes */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#ffa500] rounded-full"
                  animate={{
                    y: [-20, -60],
                    x: [0, (i - 2) * 10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: '20px',
                  }}
                />
              ))}
            </motion.div>
          </FogReveal>

          {/* Certificaciones - Cofre de Tesoros */}
          <FogReveal delay={0.2}>
            <div className="relative bg-linear-to-br from-bonfire/10 to-[#d97706]/5 dark:from-[#ffa500]/10 dark:to-[#ff8800]/5 border-4 border-bonfire overflow-hidden">
              {/* Efecto de brillo */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ffa500] to-transparent animate-pulse" />
              
              {/* Esquinas decorativas legendarias */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-bonfire" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-bonfire" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-bonfire" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-bonfire" />

              {/* Partículas brillantes */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#ffa500] rounded-full"
                  animate={{
                    y: [-20, -60],
                    x: [0, (i - 2) * 10],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    bottom: '20px',
                  }}
                />
              ))}

              <motion.button
                onClick={() => setShowCertifications(!showCertifications)}
                whileHover={{ backgroundColor: "rgba(69, 162, 158, 0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-6 flex items-center justify-between transition-colors clickable relative z-10"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="text-4xl"
                    animate={showCertifications ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <Scroll size={48} className="text-[#ffa500]" />
                  </motion.div>
                  <div className="text-left">
                    <h3 
                      className="text-2xl font-semibold text-souls tracking-wide"
                      style={{ fontFamily: 'Cinzel, serif' }}
                    >
                      {t.education.certifications}
                    </h3>
                    <p className="text-[#45a29e] text-xs font-mono mt-1">
                      {t.education.items.length} {t.education.scrollsCollected}
                    </p>
                  </div>
                </div>
                <motion.span
                  animate={{ rotate: showCertifications ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-[#ffa500]"
                >
                  ▼
                </motion.span>
              </motion.button>

              <motion.div
                initial={false}
                animate={{ 
                  height: showCertifications ? "auto" : 0,
                  opacity: showCertifications ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6 space-y-4 border-t-2 border-sheikah/30 pt-6">
                  {t.education.items.map((cert: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start gap-4 p-4 bg-[#d4cbb8]/50 dark:bg-[#0b0c10]/50 border border-sheikah/20 hover:border-sheikah transition-all"
                    >
                      <div className="shrink-0">{certificationIcons[index]}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-souls font-mono text-sm">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[#45a29e] font-mono mt-1">
                          📍 {cert.institution}
                        </p>
                        <p className="text-xs text-souls/60 font-mono mt-1">
                          📅 {cert.period} • ⏱️ {cert.duration}
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className="text-[#22c55e] text-xl">✓</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </FogReveal>
        </div>
      </div>
    </section>
  );
}
