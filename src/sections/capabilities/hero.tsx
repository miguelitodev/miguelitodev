"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { capabilitiesData, technologies } from "@/data/capabilities";
import { AsciiArt } from "@/components/capabilities/AsciiArt";
import asciiFrames from "@/app/capabilities/astronauta.json";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="flex flex-col justify-start items-start">
      <motion.div
        className="flex flex-col mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl text-gray-900 font-medium mb-6">
          Services That Shape Experiences
        </h1>
        <p className="text-xs text-gray-600 max-w-2xl">
          Design, development, and strategy—crafted to bring ideas to life and
          make every interaction meaningful.
        </p>
      </motion.div>

      <div className="flex flex-col content-between lg:flex-row lg:gap-12 w-full">
        <div className="w-full lg:w-1/3 flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Expertise
            </h2>
            <div className="text-xs flex flex-col gap-6">
              {capabilitiesData.map((capability) => (
                <div
                  className="border-b border-b-neutral-200 pb-6 grid grid-cols-1 md:grid-cols-2 items-start gap-4 lg:gap-0"
                  key={capability.title}
                >
                  <span>{capability.title}</span>
                  <span className="text-neutral-500 text-left lg:text-right">
                    {capability.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Knowlodge
            </h2>
            <div className="text-xs flex flex-col gap-6">
              {technologies.map((tech) => (
                <div
                  className="border-b border-b-neutral-200 pb-6 grid grid-cols-1 md:grid-cols-2 items-start gap-4 lg:gap-0"
                  key={tech.title}
                >
                  <span>{tech.title}</span>
                  <span className="text-neutral-500 text-left lg:text-right">
                    {tech.description}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative z-50 lg:w-1/3 h-64 w-64 sm:h-96 sm:w-96 lg:ml-64 ml-10">
          <div className="absolute right-0 top-0">
            <AsciiArt
              frames={asciiFrames}
              className="text-[5px] leading-[5px] sm:text-[10px] sm:leading-[10px]"
            />
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-screen relative left-1/2 -translate-x-1/2 mt-20 h-[700px] overflow-hidden"
      >
        <motion.div className="w-full h-full" style={{ y }}>
          <Image
            src="/img/view.jpg"
            alt="snow covered mountain under blue sky during daytime"
            width={1920}
            height={1080}
            className="w-full h-full object-cover filter grayscale scale-125"
          />
        </motion.div>

        <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-neutral-100 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-neutral-100 to-transparent" />

        <div className="absolute bottom-4 right-8 group z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6 cursor-pointer drop-shadow-md"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <div className="hidden group-hover:block absolute bottom-full right-0 mb-2 w-max max-w-xs bg-white text-black text-xs rounded-lg shadow-lg p-4">
            <a
              href="https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-during-daytime-9sD9CXLBQ-g"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Claudio Schwarz
            </a>
            <p className="text-neutral-600">Zermatt, Schweiz - July 31, 2020</p>
            <p className="italic text-neutral-500 mt-1">
              Snow covered mountain under blue sky during daytime.
            </p>
            <a
              href="https://unsplash.com/license"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 block"
            >
              Free to use under the Unsplash License
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
