"use client";

import ThemeToggle from "../ThemeToggle";
import LanguageToggle from "../LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#e8e4d9]/95 dark:bg-[#0b0c10]/95 backdrop-blur-md border-b-2 border-souls-default transition-[background-color,border-color] duration-[350ms] ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex space-x-1">
            {[
              { id: "inicio", label: t.nav.home },
              { id: "sobre-mi", label: t.nav.about },
              { id: "proyectos", label: t.nav.projects },
              { id: "experiencia", label: t.nav.experience },
              { id: "formacion", label: t.nav.education },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 py-2 text-souls hover:text-bonfire transition-colors font-mono text-sm tracking-wider clickable"
              >
                <span>
                  {item.label}
                </span>
                {/* Underline effect */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-sheikah to-bonfire"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            <motion.a
              href="/documents/Hoja de vida-Jairo Leal.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-button-bonfire text-[#2a2419] dark:text-[#0b0c10] font-bold text-xs tracking-wider border-2 border-bonfire shadow-bonfire-hover transition-all clickable font-souls-mono"
            >
              {t.nav.downloadCV}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Efecto de brillo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#45a29e] to-transparent opacity-50" />
    </motion.nav>
  );
}
