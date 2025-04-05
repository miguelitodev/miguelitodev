"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function MouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 144);
      mouseY.set(e.clientY - 144);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-72 h-72 z-40 rounded-full"
      style={{
        translateX: springX,
        translateY: springY,
        background:
          "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
        filter: "blur(60px)",
      }}
    />
  );
}
