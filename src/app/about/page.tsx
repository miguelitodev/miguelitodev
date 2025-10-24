import { Movies, Hero, Playlists } from "@/sections/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Miguel Riquelme",
  description: "Learn more about Miguel Riquelme, the creative developer and designer behind innovative digital experiences.",
  openGraph: {
    title: "About | Miguel Riquelme",
    description: "Learn more about Miguel Riquelme, the creative developer and designer behind innovative digital experiences.",
    url: "https://miguelito.dev/about",
    type: "website"
  },
  twitter: {
    title: "About | Miguel Riquelme",
    description: "Learn more about Miguel Riquelme, the creative developer and designer behind innovative digital experiences."
  }
};

export default function About() {
  return (
    <>
      <Hero />
      <Playlists />
      <Movies />
    </>
  );
}
