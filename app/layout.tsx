/**
 * Layout Raíz de la Aplicación Next.js
 * Envuelve todas las páginas con estructura HTML base
 * Incluye:
 * - Configuración de idioma (español)
 * - Preconexiones a Google Fonts para rendimiento
 * - Script de tema para evitar flash de contenido sin estilo (FOUC)
 * - Providers de contexto (tema e idioma)
 */

import "./globals.css";
import Providers from "./components/Providers";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning evita warnings de hidratación con tema dinámico
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconexiones para optimizar carga de Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Fuentes: Cinzel (títulos estilo Souls) y Space Mono (monoespaciada) */}
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        
        {/*
         * Script crítico que carga ANTES del render
         * Aplica el tema guardado en localStorage antes de mostrar contenido
         * Previene el "flash" de tema incorrecto en la carga inicial
         */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const theme = localStorage.getItem('theme');
                // Modo oscuro por defecto (tema Dark Souls)
                if (theme === 'dark' || !theme) {
                  document.documentElement.classList.add('dark');
                } else if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Providers envuelven la app con contextos de tema e idioma */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
