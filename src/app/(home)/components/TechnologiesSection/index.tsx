"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { technologies } from "@/data/technologies";
import TecnologyCard from "@/app/technologies/components/TecnologyCard";
import { ArrowRainbowRight } from "@/assets/icons";

export default function TechnologiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const mainTechnologies = technologies
    .sort((a, b) => {
      const yearsA = parseFloat(a.years.split(" ")[0]);
      const yearsB = parseFloat(b.years.split(" ")[0]);
      return yearsB - yearsA;
    })
    .slice(0, 10);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="mt-16">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-white font-merriweather">
          Main Technologies
        </h2>
        <p className="text-xl text-gray-400 font-merriweather mt-2">
          Here are some of the technologies I have the most experience with.
        </p>
      </div>
      <div className="mt-6">
        <div
          ref={scrollContainerRef}
          className="flex items-center overflow-x-auto space-x-4 pb-4 scrollbar-hide py-3"
        >
          {mainTechnologies.map((tech) => (
            <div key={tech.technology} className="flex-none">
              <TecnologyCard
                {...tech}
                color={tech.color}
              />
            </div>
          ))}
          <Link href="/technologies" className="ml-4 flex-shrink-0 self-center">
            <ArrowRainbowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}