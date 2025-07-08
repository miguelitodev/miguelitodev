import { experiences } from "@/data";

export function CurrentExperienceSection() {
  const currentExperience = experiences[0];

  return (
    <div className="flex flex-col w-4/6 mx-auto max-sm:w-full my-16">
      <h2 className="text-white text-4xl font-bold font-merriweather mb-8">
        Current Experience
      </h2>
      <div className="relative flex flex-col bg-gradient-to-r from-black via-neutral-900 to-neutral-800 shadow-lg border border-neutral-700 rounded-lg hover:shadow-2xl transition-shadow duration-300 transform group-hover:scale-105 p-6">
        <h4 className="mb-2 text-white text-xl font-semibold max-sm:text-sm">
          {currentExperience.companyName}
        </h4>
        <p className="text-slate-300 leading-normal font-light text-sm max-sm:text-xs">
          {currentExperience.companyLocation}
        </p>
        <p className="text-md font-semibold text-white uppercase max-md:text-sm">
          {currentExperience.position}
        </p>
        <p className="text-md font-light text-gray-300 max-md:text-sm mt-2">
          {currentExperience.description}
        </p>
      </div>
    </div>
  );
}
