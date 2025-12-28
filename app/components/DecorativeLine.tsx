interface DecorativeLineProps {
  color?: "bonfire" | "sheikah";
  width?: "sm" | "md" | "lg";
}

export default function DecorativeLine({ color = "sheikah", width = "md" }: DecorativeLineProps) {
  const colors = {
    bonfire: { main: "#ffa500", secondary: "#ffa500" },
    sheikah: { main: "#45a29e", secondary: "#45a29e" }
  };
  
  const widths = {
    sm: "w-20",
    md: "w-32",
    lg: "w-40"
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
