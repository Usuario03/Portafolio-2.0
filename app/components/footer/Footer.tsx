"use client";

/**
 * Componente Footer - Pie de página del portafolio
 * Contiene tres columnas:
 * 1. Branding y tagline
 * 2. Enlaces de navegación rápida
 * 3. Redes sociales (LinkedIn, GitHub)
 * Con efecto de niebla y copyright dinámico
 */

import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
  // Hook para traducciones
  const { t } = useLanguage();
  
  // Año actual para copyright dinámico
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-background to-(--hero-center) dark:to-black border-t-2 border-souls-default relative overflow-hidden">
      {/* Efecto de niebla superior */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-[#1a1a1a]/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 - Branding estilo Souls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-2xl font-bold text-[#ffa500] mb-4 tracking-wider"
              style={{ fontFamily: 'Cinzel, serif' }}
            >
              JAIRO LEAL
            </h3>
            <p className="text-souls/80 text-base leading-relaxed font-medium">
              Frontend Developer | React & Next.js
            </p>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos estilo menú */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 
              className="font-semibold text-souls mb-4 tracking-wider font-mono text-sm"
            >
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#inicio", label: t.nav.home },
                { href: "#sobre-mi", label: t.nav.about },
                { href: "#proyectos", label: t.nav.projects },
                { href: "#experiencia", label: t.nav.experience },
                { href: "#formacion", label: t.nav.education },
              ].map((link) => (
                <motion.li key={link.href} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-souls/70 hover:text-bonfire transition-colors font-mono flex items-center gap-2 group clickable"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sheikah">
                      →
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3 - Redes Sociales estilo Señales de Invocación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 
              className="font-semibold text-souls mb-4 tracking-wider font-mono text-sm"
            >
              {t.footer.connect}
            </h4>
            <div className="flex gap-3">
              {[
                { 
                  href: "https://www.linkedin.com/in/jairo-leal-180162379", 
                  label: "LinkedIn", 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  )
                },
                { 
                  href: "https://github.com/Usuario03", 
                  label: "GitHub", 
                  icon: (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  )
                },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative w-12 h-12 bg-linear-to-br from-[#d4cbb8] to-[#e8e4d9] dark:from-[#1a1a1a] dark:to-[#0b0c10] border-2 border-sheikah/30 hover:border-bonfire flex items-center justify-center transition-all clickable"
                  aria-label={social.label}
                >
                  <div className="text-sheikah group-hover:text-bonfire transition-colors relative z-10">
                    {social.icon}
                  </div>
                  <div className="absolute inset-0 bg-bonfire/0 hover:bg-bonfire/10 transition-colors" />
                </motion.a>
              ))}
            </div>
            <p className="mt-3 text-sm text-souls/70 font-mono">
              jaleal524@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Línea divisoria decorativa */}
        <div className="relative my-8">
          <div className="h-px bg-linear-to-r from-transparent via-sheikah to-transparent" />
        </div>

        {/* Copyright estilo Souls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-souls/60 font-mono">
            © {currentYear} {t.footer.rights}
          </p>
        </motion.div>

        {/* Runas decorativas en las esquinas */}
        <div className="absolute bottom-4 left-4 text-sheikah/20 text-4xl pointer-events-none">
          ✦
        </div>
        <div className="absolute bottom-4 right-4 text-[#ffa500]/20 text-4xl pointer-events-none">
          ✦
        </div>
      </div>

      {/* Efecto de resplandor inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#ffa500] to-transparent opacity-30" />
    </footer>
  );
}
