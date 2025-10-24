"use client";

import { useState, useEffect } from "react";

interface AsciiArtProps {
  frames: string[][]; // cada frame é array de linhas
  textColor?: string; // cor do texto
  bgColor?: string; // cor do fundo
  className?: string;
}

export function AsciiArt({ 
  frames,
  textColor = "black",
  bgColor = "transparent",
  className,
}: AsciiArtProps) {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 100);
    return () => clearInterval(interval);
  }, [frames]);

  if (!frames.length) return null;

  return (
    <div className="relative">
      <pre
        className={`font-mono absolute right-0 ${className}`}
        style={{
          whiteSpace: "pre",
          color: textColor,
          backgroundColor: bgColor,
        }}
      >
        {frames[frame].join("\n")}
      </pre>
    </div>
  );
}
