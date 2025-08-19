'use client';

import TecnologyCard from '@/app/technologies/components/TecnologyCard';
import { groupedTechnologies } from '@/data';

export default function Technologies() {
  return (
    <div className="flex flex-col w-4/6 mx-auto max-sm:w-full">
      <div className="mb-16">
        <h1 className="text-white text-7xl max-sm:text-4xl max-xs:text-2xl font-bold font-merriweather max-md:mb-4 mb-4">
          <span className="font-mono text-sm text-white">miguelito.dev/</span>
          Technologies
        </h1>
        <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
          A categorized timeline of my technical expertise across different
          domains.
        </p>
      </div>

      <div className="flex flex-col justify-center">
        {Object.entries(groupedTechnologies)
          .sort(([, techsA], [, techsB]) => techsB.length - techsA.length)
          .map(([category, techs]) => {
            if (!techs || techs.length === 0) return null;

            return (
              <ol
                key={category}
                className="relative border-l border-gray-500 dark:border-gray-500"
              >
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-500 dark:bg-gray-200"></div>
                  <time className="mb-1 text-sm font-normal font-mono leading-none text-white italic">
                    {category}
                  </time>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {techs
                      .sort((a, b) => b.experienceLevel - a.experienceLevel)
                      .map((tech) => (
                        <TecnologyCard
                          key={tech.technology}
                          years={tech.years}
                          technology={tech.technology}
                          url={tech.url}
                        />
                      ))}
                  </div>
                </li>
              </ol>
            );
          })}
      </div>
    </div>
  );
}
