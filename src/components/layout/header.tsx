"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-transform duration-300 ease-in-out z-40 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-6 py-4 mx-auto w-full flex flex-row justify-between items-center">
        <Link
          href="/"
          className="text-xs font-medium text-black hover:text-neutral-600 transition-colors"
        >
          MIGUEL RIQUELME ©
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-xs font-medium text-black hover:text-neutral-600 transition-colors"
          >
            About
          </Link>
          <a
            href="#projects"
            className="text-xs font-medium text-black hover:text-neutral-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#capabilities"
            className="text-xs font-medium text-black hover:text-neutral-600 transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#contact"
            className="text-xs font-medium text-black hover:text-neutral-600 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
