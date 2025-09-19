"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coordinates = useRef({ x: 0, y: 0 });
  const currentCoordinates = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Show custom cursor initially
    cursor.style.opacity = '1';
    document.body.classList.add('custom-cursor-active');

    const updateCursor = () => {
      // Add a slight lag effect for smoothness
      currentCoordinates.current.x += (coordinates.current.x - currentCoordinates.current.x) / 4;
      currentCoordinates.current.y += (coordinates.current.y - currentCoordinates.current.y) / 4;
      
      // Position the cursor with proper centering
      cursor.style.left = `${currentCoordinates.current.x}px`;
      cursor.style.top = `${currentCoordinates.current.y}px`;
      
      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      coordinates.current.x = e.clientX;
      coordinates.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .animated-underline, input, textarea, select")) {
        // Hide custom cursor and allow default cursor
        cursor.style.opacity = '0';
        document.body.classList.remove('custom-cursor-active');
      } else {
        // Show custom cursor
        cursor.style.opacity = '1';
        document.body.classList.add('custom-cursor-active');
      }
    };

    // Initialize cursor position
    coordinates.current.x = window.innerWidth / 2;
    coordinates.current.y = window.innerHeight / 2;
    currentCoordinates.current.x = window.innerWidth / 2;
    currentCoordinates.current.y = window.innerHeight / 2;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    // Start animation loop
    const animationId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationId);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="custom-cursor"
    />
  );
}