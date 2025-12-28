"use client";

/**
 * Componente Providers - Wrapper de Context Providers
 * Envuelve la aplicación con los providers necesarios:
 * - ThemeProvider: Maneja tema claro/oscuro
 * - LanguageProvider: Maneja idioma ES/EN
 * 
 * El orden importa: ThemeProvider debe estar primero
 * para que el tema se aplique antes que el contenido
 */

import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ReactNode } from "react";

/**
 * Componente que agrupa todos los providers de contexto
 * @param children - Componentes hijos de la aplicación
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    // Provider de tema (dark/light mode)
    <ThemeProvider>
      {/* Provider de idioma (ES/EN) */}
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}
