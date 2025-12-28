"use client";

/**
 * Context de Idioma - Maneja el cambio entre español e inglés
 * Persiste la selección del usuario en localStorage
 * Proporciona traducciones a través del hook useLanguage
 */

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

// Tipo para idiomas soportados
type Language = "es" | "en";

// Interface del contexto con funciones y datos disponibles
interface LanguageContextType {
  language: Language;           // Idioma actual
  toggleLanguage: () => void;  // Función para cambiar idioma
  t: typeof es;                // Objeto con todas las traducciones
}

// Objeto con archivos de traducción
const translations = { es, en };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Provider que envuelve la aplicación y proporciona contexto de idioma
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  // Estado del idioma actual (por defecto español)
  const [language, setLanguage] = useState<Language>("es");
  
  // Estado para evitar hidratación incorrecta en SSR
  const [mounted, setMounted] = useState(false);

  // Al montar, recupera el idioma guardado en localStorage
  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "es" ? "en" : "es";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
