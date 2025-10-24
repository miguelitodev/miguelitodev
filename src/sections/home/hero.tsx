"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  return (
    <div
      ref={ref}
      className="h-screen flex flex-col justify-between pl-6 pt-[120px]"
    >
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I develop user interfaces and enhance user experiences using web
        technologies.
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl max-w-2xl pb-[60px]"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.span
          className="text-neutral-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Since 2020
        </motion.span>{" "}
        working with{" "}
        <motion.span
          className="text-neutral-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Front-end
        </motion.span>
        , I build responsive and efficient{" "}
        <motion.span
          className="text-neutral-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          web applications
        </motion.span>{" "}
        while solving real-world user problems.
      </motion.h2>
    </div>
  );
}
