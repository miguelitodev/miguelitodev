"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { professionalSocialMedias, personalSocialMedias } from "@/data/social-media";

export function SocialProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div 
      ref={ref} 
      className="min-h-screen flex flex-col gap-16 px-6 pt-[120px]"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-medium leading-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          All my social profiles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium mb-8 uppercase tracking-[-.01em]">
              Professional
            </h3>
            <ul className="space-y-4">
              {professionalSocialMedias.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.link}
                    className="animated-underline text-lg flex items-center gap-3 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:text-neutral-600 transition-colors">
                      {social.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-8 uppercase tracking-[-.01em]">
              Personal
            </h3>
            <ul className="space-y-4">
              {personalSocialMedias.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.link}
                    className="animated-underline text-lg flex items-center gap-3 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="group-hover:text-neutral-600 transition-colors">
                      {social.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}