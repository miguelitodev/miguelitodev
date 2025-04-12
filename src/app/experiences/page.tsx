"use client";

import { ButtonFlashing } from "@/components/shared";
import { experiences } from "@/data";

export default function Experiences() {
  return (
    <div className="flex flex-col w-4/6 mx-auto max-sm:w-full">
      <div className="mb-16 flex flex-col gap-4">
        <h1 className="text-white text-7xl max-sm:text-4xl max-xs:text-2xl font-bold font-merriweather max-md:mb-4 mb-4">
          <span className="font-mono text-sm text-white">miguelito.dev/</span>
          Experience
        </h1>

        <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
          A journey through my professional experience, showcasing my career
          path and achievements.
        </p>

        <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
          I&apos;m a passionate Frontend Developer since 2020, focused on
          building minimalistic, high-performance, and user-friendly web
          applications.
        </p>

        <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
          I specialize in React, Next.js, and TypeScript, and have a strong
          background in UI/UX design. My journey includes working with companies
          like Qintess, EVVE, and Printi, as well as international projects in
          Germany and the US.
        </p>

        <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
          I&apos;m always looking for ways to learn and improve my skills, using
          modern tools like TailwindCSS, Zustand, and Storybook to deliver
          optimal user experiences.
        </p>

        <ButtonFlashing
          action={() => {
            window.open(
              "https://www.linkedin.com/in/miguelitodev",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="w-fit"
        >
          Check it out
        </ButtonFlashing>
      </div>

      <div className="flex flex-col justify-center">
        {experiences.map(
          (
            { companyLocation, companyName, description, duration, position },
            index
          ) => (
            <ol
              key={index}
              className="relative border-l border-gray-200 dark:border-gray-500"
            >
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-500 dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal font-mono leading-none text-white italic">
                  {duration}
                </time>
                <div className="relative flex flex-col bg-gradient-to-r from-black via-neutral-900 to-neutral-800 shadow-lg border border-neutral-700 rounded-lg hover:shadow-2xl transition-shadow duration-300 transform group-hover:scale-105 ml-14 max-lg:ml-0 mt-8 w-4/5 max-2xl:w-full min-h-[150px] p-6">
                  <h4 className="mb-2 text-white text-xl font-semibold max-sm:text-sm">
                    {companyName}
                  </h4>
                  <p className="text-slate-300 leading-normal font-light text-sm max-sm:text-xs">
                    {companyLocation}
                  </p>
                  <p className="text-md font-semibold text-white uppercase max-md:text-sm">
                    {position}
                  </p>
                  <p className="text-md font-light text-gray-300 max-md:text-sm mt-2">
                    {description}
                  </p>
                </div>
              </li>
            </ol>
          )
        )}
      </div>
    </div>
  );
}
