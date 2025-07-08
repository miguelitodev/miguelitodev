import HomeClientContent from "@/components/home/HomeClientContent";
import { CurrentExperienceSection } from "@/components/home/CurrentExperienceSection";
import { RepositoriesSection } from "@/components/home/RepositoriesSection";

export default function HomePage() {
  return (
    <div className="w-3/5 max-md:w-full max-lg:w-4/5 mx-auto">
      <HomeClientContent />
      <CurrentExperienceSection />
    </div>
  );
}
