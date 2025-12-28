"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 bg-card-souls border-2 border-souls-default hover-border-bonfire transition-all p-0 clickable perspective-[1000px] relative overflow-hidden group"
      onClick={toggleLanguage}
      aria-label="Cambiar idioma / Switch language"
    >
      {/* Efecto de brillo al hover */}
      <div className="absolute inset-0 bg-bonfire/0 group-hover:bg-bonfire/10 transition-colors" />
      
      <div 
        className={`relative w-full h-full text-center transition-transform duration-600 ease-out transform-3d origin-center ${
          language === "en" ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 font-mono font-bold text-xs flex items-center justify-center backface-hidden bg-transparent z-2 text-souls">
          ES
        </div>
        <div className="absolute inset-0 font-mono font-bold text-xs flex items-center justify-center backface-hidden bg-transparent transform-[rotateY(180deg)] text-souls">
          EN
        </div>
      </div>
      
      {/* Indicador de idioma activo */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-sheikah transition-all" />
    </motion.button>
  );
}
