"use client";

/**
 * Context de Tema - Maneja el cambio entre modo claro y oscuro
 * Por defecto usa modo oscuro (temática Dark Souls)
 * Persiste la selección en localStorage y sincroniza con Tailwind
 */

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Interface del contexto de tema
interface ThemeContextType {
  theme: "light" | "dark";     // Tema actual
  toggleTheme: () => void;     // Función para cambiar entre temas
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Provider que envuelve la aplicación y proporciona funcionalidad de tema
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  // Por defecto "dark" para mantener la temática Dark Souls
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  // Estado para evitar problemas de hidratación en SSR
  const [mounted, setMounted] = useState(false);

  // Al montar, recupera el tema guardado y aplica la clase al HTML
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      if (saved === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Por defecto modo oscuro (tema Souls)
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Evitar flash de contenido sin estilo
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
