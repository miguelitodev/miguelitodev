"use client";

import { motion } from "framer-motion";
import { capabilitiesData } from "@/data/capabilities";
import { AsciiArt } from "@/components/capabilities/AsciiArt";
import asciiFrames from "@/app/capabilities/astronauta.json";

export function Hero() {
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
        <p className="text-base text-gray-600 max-w-2xl">
          Design, development, and strategy—crafted to bring ideas to life and
          make every interaction meaningful.
        </p>
      </motion.div>

      <div className="flex flex-row justify-between items-start">
        <div className="max-w-4xl flex flex-col">
          <motion.div
            className="flex flex-col w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilitiesData.map((capability) => (
                <>
                  <span>{capability.title}</span>
                  <span>{capability.description}</span>
                </>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col w-full mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-medium text-gray-900 mb-8">
              Knowledge
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Frontend
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">React.js</li>
                  <li className="text-gray-600">Next.js</li>
                  <li className="text-gray-600">TypeScript</li>
                  <li className="text-gray-600">Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Backend
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-600">Node.js</li>
                  <li className="text-gray-600">Express</li>
                  <li className="text-gray-600">MongoDB</li>
                  <li className="text-gray-600">PostgreSQL</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-1/2 overflow-x-auto">
          <AsciiArt frames={asciiFrames} lineHeight={7} />
        </div>
      </div>
    </div>
  );
}
