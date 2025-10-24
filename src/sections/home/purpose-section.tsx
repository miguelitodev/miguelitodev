"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function PurposeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="min-h-screen w-full px-4 sm:px-6 py-10 flex flex-col justify-center items-start gap-8 sm:gap-12"
    >
      <motion.h2
        className="text-xl sm:text-2xl text-neutral-400"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Purpose
      </motion.h2>

      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl leading-tight w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        I believe in building interfaces that connect. Every detail in my code
        aims to deliver fluid, accessible, and high-performance experiences.
      </motion.p>

      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl leading-tight w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I dont just ship features; I create scalable solutions with React,
        Next.js, and TypeScript, turning complex challenges into intuitive
        products.
      </motion.p>

      <motion.p
        className="text-3xl sm:text-4xl md:text-5xl leading-tight w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        My work is guided by principles, not trends. Clean code, usability, and
        innovation drive me to build projects that make a real impact.
      </motion.p>
    </div>
  );
}
