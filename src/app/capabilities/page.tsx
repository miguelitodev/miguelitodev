import { Hero } from "@/sections/capabilities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities | Miguel Riquelme",
  description: "Explore the skills and capabilities of Miguel Riquelme including UI/UX Design, Web Development, Brand Identity, and Art Direction.",
  openGraph: {
    title: "Capabilities | Miguel Riquelme",
    description: "Explore the skills and capabilities of Miguel Riquelme including UI/UX Design, Web Development, Brand Identity, and Art Direction.",
    url: "https://miguelito.dev/capabilities",
    type: "website"
  },
  twitter: {
    title: "Capabilities | Miguel Riquelme",
    description: "Explore the skills and capabilities of Miguel Riquelme including UI/UX Design, Web Development, Brand Identity, and Art Direction."
  }
};

export default function Capabilities() {
  return (
    <div className="min-h-screen px-6 py-20">
      <Hero />
    </div>
  );
}
