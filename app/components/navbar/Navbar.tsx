"use client";

/**
 * Componente Navbar - Barra de navegación principal
 * Incluye menú sticky con efecto glassmorphism, navegación por secciones,
 * toggle de tema/idioma y botón de descarga de CV
 * Responsive con menú hamburguesa en móvil
 */

import ThemeToggle from "../ThemeToggle";
import LanguageToggle from "../LanguageToggle";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  // Hook para traducciones
  const { t } = useLanguage();
  
  // Estado para controlar apertura/cierre del menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  /**
   * Navega a una sección específica con scroll suave
   * y cierra el menú móvil si está abierto
   * @param id - ID de la sección destino
   */
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80; // Offset para el navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100); // Pequeño delay para cerrar el menú primero
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-[#e8e4d9]/95 dark:bg-[#0b0c10]/95 backdrop-blur-md border-b-2 border-souls-default transition-[background-color,border-color] duration-350 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-center items-center h-16">
          {/* Botón menú móvil */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-souls hover:text-bonfire transition-colors p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

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
          <div className="flex items-center space-x-2 md:space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            <motion.a
              href="/documents/Hoja de vida-Jairo Leal.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-button-bonfire text-[#2a2419] dark:text-[#0b0c10] font-bold text-xs tracking-wider border-2 border-bonfire shadow-bonfire-hover transition-all clickable font-souls-mono"
            >
              {t.nav.downloadCV}
            </motion.a>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-souls-default bg-[#e8e4d9]/95 dark:bg-[#0b0c10]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
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
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full text-left px-4 py-3 text-souls hover:text-bonfire hover:bg-souls-default/30 transition-colors duration-200 font-mono text-sm tracking-wider rounded border border-transparent hover:border-bonfire/20"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="/documents/Hoja de vida-Jairo Leal.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center px-4 py-3 bg-button-bonfire text-[#2a2419] dark:text-[#0b0c10] font-bold text-xs tracking-wider border-2 border-bonfire rounded mt-4 hover:shadow-bonfire-hover transition-all"
              >
                {t.nav.downloadCV}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Efecto de brillo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#45a29e] to-transparent opacity-50" />
    </motion.nav>
  );
}
