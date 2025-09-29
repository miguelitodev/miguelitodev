"use client";

import { useState, useEffect } from "react";

interface AsciiArtProps {
  frames: string[][]; // cada frame é array de linhas
  fontSize?: number; // tamanho da fonte em px
  lineHeight?: number; // altura da linha em px
  textColor?: string; // cor do texto
  bgColor?: string; // cor do fundo
}

export function AsciiArt({
  frames,
  fontSize = 10,
  lineHeight = 10,
  textColor = "black",
  bgColor = "transparent",
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
    <pre
      className="font-mono p-2 overflow-auto"
      style={{
        whiteSpace: "pre",
        fontSize: `${fontSize}px`,
        lineHeight: `${lineHeight}px`,
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      {frames[frame].join("\n")}
    </pre>
  );
}
