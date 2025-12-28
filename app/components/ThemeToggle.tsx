"use client"

/**
 * Componente ThemeToggle - Botón para cambiar entre tema claro/oscuro
 * Usa imágenes personalizadas de Hollow Knight para los iconos
 * Incluye animaciones de escala y rotación al interactuar
 */

import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button 
      onClick={toggleTheme} 
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme" 
      className="inline-flex items-center justify-center p-0 border-2 border-souls-default hover-border-bonfire bg-card-souls transition-all clickable relative overflow-visible group w-10 h-10"
    >
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 bg-bonfire/0 group-hover:bg-bonfire/10 transition-colors" />

      {/* Iconos de Hollow Knight */}
      <motion.img
        key={theme}
        src={theme === "dark" ? "/images/Claro.png" : "/images/Oscuro.png"}
        alt={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        className="relative z-10 w-14 h-14 object-contain transition-all duration-300 group-hover:scale-110"
        style={{
          filter: theme === "dark" 
            ? "drop-shadow(0 0 8px rgba(69, 162, 158, 0.6)) brightness(1.1)" 
            : "drop-shadow(0 0 6px rgba(0, 0, 0, 0.8)) contrast(1.2) brightness(0.8)"
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Indicador de estado */}
      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 transition-all ${
        theme === "dark" ? "bg-sheikah" : "bg-bonfire"
      }`} />
    </motion.button>
  );
}
