"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { capabilitiesData } from "@/data/capabilities";

export function CapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const toggleCapability = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      className="py-20 px-6 w-full flex flex-col justify-start items-start h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-300 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Capabilities
      </motion.h2>
      <div className="w-full">
        {capabilitiesData.map((capability, index) => (
          <motion.div
            key={index}
            className={`${
              openIndex === index || hoverIndex === index
                ? "bg-black"
                : "bg-transparent"
            }`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className={`w-full flex justify-between items-center p-6 text-left cursor-pointer ${
                openIndex === index || hoverIndex === index
                  ? "text-white"
                  : "text-gray-900"
              }`}
              onClick={() => toggleCapability(index)}
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium">{capability.title}</h3>
              <div className="ml-4 flex-shrink-0">
                <div
                  className={`w-6 h-6 flex items-center justify-center ${
                    openIndex === index || hoverIndex === index
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "none",
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0, delay: 0 }}
            >
              <div className="px-6 pb-6 text-gray-300">
                <motion.p
                  className="text-base sm:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: openIndex === index ? 1 : 0 }}
                  transition={{ duration: 0 }}
                >
                  {capability.description}
                </motion.p>
              </div>
            </motion.div>
            <div
              className={`w-full h-px ${
                openIndex === index || hoverIndex === index
                  ? "bg-gray-700"
                  : "bg-gray-200"
              }`}
            ></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
