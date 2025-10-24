"use client";

import { PiStackLight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import { AsciiArt } from "@/components/capabilities/AsciiArt";
import abstractFrames from "./cube.json";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      // Get time in Brazil (America/Sao_Paulo timezone)
      const now = new Date();
      const brazilTime = new Intl.DateTimeFormat("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(now);

      setCurrentTime(brazilTime);
    };

    // Update time immediately
    updateTime();

    // Update time every minute
    const intervalId = setInterval(updateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer
      ref={ref}
      id="contact"
      className="overflow-hidden flex flex-col gap-8 sm:gap-10 md:gap-[60px] lg:gap-[100px] px-4 sm:px-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-0">
        <div className="flex flex-col justify-start items-start gap-4 sm:gap-8 w-full sm:w-auto">
          <motion.span
            className="text-neutral-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          >
            The end… and the beginning of our
            <br /> <span className="text-neutral-950">next project</span>.
          </motion.span>
          <motion.button
            className="p-2 bg-white flex flex-row gap-3 sm:gap-4 items-center justify-center hover:bg-neutral-200 hover:cursor-pointer transition-colors duration-300 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <span className="text-black text-xs sm:text-sm">
              Make it happen
            </span>
            <div className="bg-neutral-200 h-8 w-8 sm:h-10 sm:w-10 flex justify-center items-center">
              <PiStackLight size={24} className="sm:size-8" />
            </div>
          </motion.button>
        </div>
        <div className="w-full sm:w-2/5 md:w-1/2 overflow-x-auto">
          <div className="min-w-max">
            <AsciiArt
              frames={abstractFrames}
              className="scale-75 sm:scale-90 md:scale-100"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm gap-4 sm:gap-0 px-0 sm:px-4 md:px-10">
        <ul>
          <li>
            <span>{currentTime} - Brazil</span>
          </li>
        </ul>
        <ul className="flex flex-row sm:flex-col gap-2 sm:gap-2">
          <li>
            <a
              href="https://github.com/miguelitodev"
              className="animated-underline"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/miguelito.dev"
              className="animated-underline"
            >
              Instagram
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="mailto:miguelito.dev@proton.me"
              className="animated-underline"
            >
              E-mail
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.2, delay: 1.2 }}
            >
              ©2025 MIGUEL RIQUELME
            </motion.span>
          </li>
        </ul>
      </div>
      <motion.div
        className="w-full overflow-x-auto -ml-4 sm:-ml-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      >
        <motion.span className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] inline-block whitespace-nowrap animate-marquee py-4">
          MIGUEL RIQUELME ©
        </motion.span>
      </motion.div>
    </footer>
  );
}
