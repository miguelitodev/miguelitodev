import { Hero } from "@/sections/home/hero";
import { PurposeSection } from "@/sections/home/purpose-section";
import { CapabilitiesSection } from "@/sections/home/capabilities-section";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <Hero />
      <PurposeSection />
      <CapabilitiesSection />
    </div>
  );
}