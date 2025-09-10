"use client";

import dynamic from "next/dynamic";

const MoviesSection = dynamic(() => import("../MoviesSection"), { ssr: false });

export default function MoviesSectionWrapper() {
  return <MoviesSection />;
}
