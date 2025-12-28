/**
 * Generador de Favicon Dinámico
 * Crea el favicon del sitio usando Next.js ImageResponse API
 * Genera un ícono de llama (hoguera) en colores Dark Souls
 * sobre fondo oscuro gradiente
 * 
 * El favicon se genera en el edge runtime para mejor rendimiento
 */

import { ImageResponse } from 'next/og';

// Ejecuta en edge runtime (más rápido)
export const runtime = 'edge';

// Tamaño del favicon (32x32 es estándar)
export const size = {
  width: 32,
  height: 32,
};

// Tipo MIME de la imagen generada
export const contentType = 'image/png';

/**
 * Componente que genera el favicon
 * Retorna una imagen SVG renderizada como PNG
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #0b0c10 0%, #1f2833 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffa500"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
