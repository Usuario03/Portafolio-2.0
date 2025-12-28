/**
 * Componente DecorativeLine - Línea decorativa con diamante central
 * Utilizada como separador visual entre secciones
 * Estilo inspirado en divisores de Dark Souls
 */

/**
 * Props del componente
 */
interface DecorativeLineProps {
  color?: "bonfire" | "sheikah";  // Color del tema: naranja o turquesa
  width?: "sm" | "md" | "lg";     // Ancho de las líneas
}

/**
 * Componente de línea decorativa con gradientes y diamante central
 * @param color - Esquema de color (bonfire=naranja, sheikah=turquesa)
 * @param width - Tamaño de las líneas laterales
 */
export default function DecorativeLine({ color = "sheikah", width = "md" }: DecorativeLineProps) {
  // Paleta de colores para cada tema
  const colors = {
    bonfire: { main: "#ffa500", secondary: "#ffa500" },  // Naranja/dorado
    sheikah: { main: "#45a29e", secondary: "#45a29e" }   // Turquesa
  };
  
  // Clases de ancho para las líneas
  const widths = {
    sm: "w-20",   // Pequeño: 5rem
    md: "w-32",   // Medio: 8rem
    lg: "w-40"    // Grande: 10rem
  };

  const selectedColor = colors[color];
  const selectedWidth = widths[width];

  return (
    <div className="flex items-center justify-center gap-4">
      <div 
        className={`h-px ${selectedWidth} bg-linear-to-r from-transparent to-[${selectedColor.main}]`}
        style={{ 
          backgroundImage: `linear-gradient(to right, transparent, ${selectedColor.main}, ${selectedColor.secondary})` 
        }}
      />
      <div 
        className="w-2 h-2 rotate-45" 
        style={{ backgroundColor: selectedColor.main }}
      />
      <div 
        className={`h-px ${selectedWidth} bg-linear-to-l from-transparent to-[${selectedColor.main}]`}
        style={{ 
          backgroundImage: `linear-gradient(to left, transparent, ${selectedColor.main}, ${selectedColor.secondary})` 
        }}
      />
    </div>
  );
}
