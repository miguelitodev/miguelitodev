"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  professionalSocialMedias,
  personalSocialMedias,
} from "@/data/social-media";

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageHeight = Math.max(150, 350 - scrollY * 0.3);
  const age = new Date().getFullYear() - 2002; // calcula sua idade

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col gap-8 px-6 pt-[120px] uppercase"
    >
      <motion.h1
        className="text-8xl"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        About ME
      </motion.h1>
      <ul className="flex flex-row justify-start gap-32  text-xs leading-tight font-medium h-full">
        <li className="w-[800px] flex flex-col gap-6 h-full pb-8">
          <motion.span
            className="font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I&apos;m Miguel, a{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              front-end developer
            </motion.span>{" "}
            born in São Paulo, Brazil in 2002 — so I’m{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {age} years old
            </motion.span>
            . I’m passionate about turning ideas into{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              clean
            </motion.span>
            ,{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              interactive
            </motion.span>
            , and{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              user-centered
            </motion.span>{" "}
            experiences. My work spans{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              landing pages
            </motion.span>
            ,{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              web systems
            </motion.span>
            , and{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 1.0 }}
            >
              UI/UX
            </motion.span>
            . My journey started with{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              curiosity
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 1.2 }}
            >
              experimentation
            </motion.span>{" "}
            — building, testing, and improving over{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 1.3 }}
            >
              100 study projects
            </motion.span>{" "}
            on GitHub, sharpening both my technical skills and design
            sensibility.
          </motion.span>

          {/* Segundo parágrafo */}
          <motion.span
            className="font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            At{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 1.8 }}
            >
              {age} years old
            </motion.span>
            , I&apos;m driven by curiosity and a love for experiences that make
            life exciting. I enjoy{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 1.9 }}
            >
              Formula 1
            </motion.span>
            , diving into{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 2.0 }}
            >
              FPS games
            </motion.span>{" "}
            like Valorant and League of Legends, and exploring stories on the
            big screen. Life at home is brightened by my dog{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 2.1 }}
            >
              Babi
            </motion.span>
            , a 12-year-old bundle of energy. I also love experimenting with
            hobbies — from{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 2.2 }}
            >
              cooking
            </motion.span>{" "}
            to{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 2.3 }}
            >
              traveling
            </motion.span>
            , hiking, volleyball, and seeking new{" "}
            <motion.span
              className="text-neutral-400 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.3, delay: 2.4 }}
            >
              adventures
            </motion.span>{" "}
            that make me feel alive and a little closer to the edge.
          </motion.span>
          <motion.div
            className="mt-8 relative overflow-hidden rounded-lg"
            style={{ width: "300px", height: `${imageHeight}px` }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            <img
              src="/img/me-at-montain.jpg"
              alt="Miguel at the mountain"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </li>
        <li className="flex flex-col gap-6">
          <motion.span
            className="text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            Location
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <Link
              href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6814347,-46.9249413,10z"
              className="animated-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              BRAZIL, SP - 01 000 23° <br />
              33&apos; 1&quot; S 46° 38&apos; 2&quot; W
            </Link>
          </motion.div>
        </li>
        <li className="flex flex-col gap-6">
          <motion.span
            className="text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.4 }}
          >
            Social
          </motion.span>
          <ul className="flex flex-col gap-2">
            {[
              { id: "instagram", name: "Instagram", delay: 2.5 },
              { id: "linkedin", name: "Linkedin", delay: 2.6 },
              { id: "github", name: "Github", delay: 2.7 },
              { id: "devto", name: "Dev.to", delay: 2.8 },
              { id: "figma", name: "Figma", delay: 2.9 },
              { id: "medium", name: "Medium", delay: 3.0 },
              { id: "codesandbox", name: "CodeSandbox", delay: 3.1 },
              { id: "email", name: "E-mail", delay: 3.2 },
            ].map((social) => (
              <motion.li
                key={social.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: social.delay }}
              >
                {personalSocialMedias.find((s) => s.id === social.id) ||
                professionalSocialMedias.find((s) => s.id === social.id) ? (
                  <Link
                    href={
                      personalSocialMedias.find((s) => s.id === social.id)
                        ?.link ||
                      professionalSocialMedias.find((s) => s.id === social.id)
                        ?.link ||
                      "#"
                    }
                    className="animated-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </Link>
                ) : (
                  <a href="#" className="animated-underline">
                    {social.name}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col gap-6">
          <motion.span
            className="text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          >
            Stack
          </motion.span>
          <ul className="flex flex-col gap-2 mb-16">
            {[
              {
                name: "HTML5",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                delay: 3.5,
              },
              {
                name: "CSS3",
                link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
                delay: 3.6,
              },
              {
                name: "JavaScript (ES6+)",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                delay: 3.7,
              },
              {
                name: "TypeScript",
                link: "https://www.typescriptlang.org/docs/",
                delay: 3.8,
              },
              {
                name: "React",
                link: "https://react.dev/reference/react",
                delay: 3.9,
              },
              { name: "Next.js", link: "https://nextjs.org/docs", delay: 4.0 },
              {
                name: "Tailwind CSS",
                link: "https://tailwindcss.com/docs",
                delay: 4.1,
              },
              {
                name: "Styled Components",
                link: "https://styled-components.com/docs",
                delay: 4.2,
              },
              {
                name: "Git/GitHub",
                link: "https://git-scm.com/doc",
                delay: 4.3,
              },
              {
                name: "API REST",
                link: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
                delay: 4.4,
              },
            ].map((tech, index) => (
              <motion.li
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8, delay: tech.delay }}
              >
                <Link
                  href={tech.link}
                  className="animated-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tech.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 4.6 }}
          >
            <Link
              href=""
              className="animated-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Download Resume</span>
            </Link>
          </motion.div>
        </li>
      </ul>
    </div>
  );
}
