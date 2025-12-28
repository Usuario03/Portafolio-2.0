/**
 * Configuración de Next.js
 * Define headers de seguridad y políticas para toda la aplicación
 * 
 * Security Headers implementados:
 * - HSTS: Fuerza HTTPS por 2 años
 * - X-Frame-Options: Previene clickjacking
 * - X-Content-Type-Options: Previene MIME sniffing
 * - X-XSS-Protection: Protección adicional contra XSS
 * - Referrer-Policy: Controla información de referencia
 * - Permissions-Policy: Bloquea APIs sensibles
 * - Content-Security-Policy: Controla fuentes de contenido permitidas
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Función async que define headers HTTP personalizados
   * Se aplican a todas las rutas de la aplicación
   */
  async headers() {
    return [
      {
        // Aplica a todas las rutas y subrutas
        source: '/:path*',
        headers: [
          {
            // Activa prefetch de DNS para dominios externos
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            // HSTS: Fuerza HTTPS durante 2 años, incluye subdominios
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            // Previene clickjacking: solo permite iframes del mismo origen
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            // Previene MIME sniffing (detectar tipo de archivo incorrectamente)
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            // Protección XSS heredada (navegadores antiguos)
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            // Envía URL origen solo en navegación cross-origin
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            // Bloquea acceso a cámara, micrófono, geolocalización, FLoC
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          },
          {
            // Content Security Policy: define fuentes permitidas de contenido
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",                                    // Por defecto solo mismo origen
              "script-src 'self' 'unsafe-eval' 'unsafe-inline'",     // Scripts: propio sitio + inline (Next.js)
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",  // Estilos + Google Fonts
              "font-src 'self' https://fonts.gstatic.com",           // Fuentes + Google Fonts
              "img-src 'self' data: blob: https://cdn.jsdelivr.net", // Imágenes + devicons CDN
              "connect-src 'self'",                                   // Fetch/XHR solo mismo origen
              "frame-ancestors 'self'"                                // Solo puede ser embebido por mismo origen
            ].join('; ')
          }
        ],
      },
    ];
  },
};

export default nextConfig;
