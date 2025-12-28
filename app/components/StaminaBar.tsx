"use client";

/**
 * Componente StaminaBar - Barra de progreso de scroll
 * Inspirada en la barra de stamina de Dark Souls
 * Cambia de color según el progreso:
 * - Verde (0-70%): scroll normal
 * - Amarillo (70-90%): advertencia de final
 * - Rojo (>90%): cerca del final de la página
 * Incluye marcadores visuales cada 25%
 */

import { useEffect, useState } from 'react';

const StaminaBar = () => {
  // Estado que almacena el porcentaje de scroll (0-100)
  const [scrollWidth, setScrollWidth] = useState(0);

  /**
   * Calcula el porcentaje de scroll de la página
   * Se ejecuta cada vez que el usuario hace scroll
   */
  const handleScroll = () => {
    // Posición actual del scroll
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Altura total scrolleable de la página
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Calcula porcentaje de scroll
    const scrolled = (winScroll / height) * 100;
    
    setScrollWidth(scrolled);
  };

  /**
   * Effect hook que añade/remueve listener de scroll
   * Se ejecuta al montar/desmontar el componente
   */
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Retorna las clases CSS para el color de la barra
   * según el porcentaje de scroll actual
   * @returns string - Clases de Tailwind para color y sombra
   */
  const getBarColor = () => {
    if (scrollWidth > 90) return 'bg-red-500 shadow-[0_0_15px_#ef4444]';
    if (scrollWidth > 70) return 'bg-yellow-500 shadow-[0_0_15px_#eab308]';
    return 'bg-green-500 shadow-[0_0_10px_#22c55e]';
  };

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-[#e8e4d9]/90 dark:bg-[#0b0c10]/90 border-b border-sheikah/30">
      <div className="relative w-full h-full overflow-hidden">
        {/* Barra de Estamina */}
        <div 
          className={`h-full transition-all duration-100 ease-out ${getBarColor()}`}
          style={{ width: `${scrollWidth}%` }}
        >
          {/* Efecto de brillo animado */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
        
        {/* Marcadores de distancia (opcionales) */}
        <div className="absolute top-0 left-0 w-full h-full flex">
          {[25, 50, 75].map((mark) => (
            <div
              key={mark}
              className="absolute top-0 h-full w-px bg-sheikah/50"
              style={{ left: `${mark}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaminaBar;
