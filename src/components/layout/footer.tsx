"use client";

import { PiStackLight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      // Get time in Brazil (America/Sao_Paulo timezone)
      const now = new Date();
      const brazilTime = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
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
      className="overflow-hidden whitespace-nowrap flex flex-col gap-[200px]"
    >
      <div className="flex flex-col justify-start items-start gap-8 px-10">
        <motion.span
          className="text-neutral-400 text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          The end… and the beginning of our
          <br /> <span className="text-neutral-950">next project</span>.
        </motion.span>
        <motion.button
          className="p-2 bg-white flex flex-row gap-4 items-center justify-center hover:bg-neutral-200 hover:cursor-pointer transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <span className="text-black text-xs">Make it happen</span>
          <div className="bg-neutral-200 h-[40px] w-[40px] flex justify-center items-center">
            <PiStackLight size={32} />
          </div>
        </motion.button>
      </div>
      <div className="flex justify-between flex-row text-xs px-10">
        <ul>
          <li>
            <span>{currentTime} - Brazil</span>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <a href="" className="animated-underline">LinkedIn</a>
          </li>
          <li>
            <a href="" className="animated-underline">Github</a>
          </li>
          <li>
            <a href="" className="animated-underline">Instagram</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="" className="animated-underline">E-mail</a>
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
      <motion.span
        className="text-[10rem] inline-block animate-marquee"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: 1.6 }}
      >
        MIGUEL RIQUELME ©
      </motion.span>
    </footer>
  );
}
