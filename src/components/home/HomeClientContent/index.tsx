"use client";

import { TypeAnimation } from "react-type-animation";
import MoviesSection from "@/components/home/MoviesSection";
import TechnologiesSection from "@/components/home/TechnologiesSection";
import { RepositoriesSection } from "@/components/home/RepositoriesSection";

export default function HomeClientContent() {
  return (
    <>
      <h1 className="text-white text-5xl max-xl:text-4xl max-md:text-2xl font-bold font-merriweather max-md:mb-4 mb-4">
        Hi, I&apos;m{" "}
        <span className="font-bold leading-loose  font-merriweather lg:leading-normal tracking-wider text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
          Miguel Riquelme
        </span>{" "}
        <span className="font-mono text-sm text-white">
          and I am{" "}
          <TypeAnimation
            sequence={[
              "Mid-level developer",
              1000,
              "",
              "Front-end developer",
              1000,
              "",
              1000,
              "Designer",
              1000,
              "",
              "Mobile developer",
              1000,
            ]}
            style={{ fontFamily: "Roboto mono" }}
            wrapper="span"
            speed={70}
            repeat={Infinity}
          />
        </span>
      </h1>
      <div className="text-left"></div>
      <p className="text-white font-light font-merriweather text-3xl max-xl:text-2xl max-md:text-xl max-sm:text-lg leading-loose">
        I develop user interfaces and enhance user experiences using web
        technologies. Since 2020 working with Front-end, I build responsive and
        efficient web applications while solving real-world user problems.
      </p>
      <TechnologiesSection />
      <MoviesSection />
      <RepositoriesSection />
    </>
  );
}

