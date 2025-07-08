"use client";

import dynamic from "next/dynamic";

const TechnologiesSection = dynamic(() => import("@/components/home/TechnologiesSection"), { ssr: false });

export default function TechnologiesSectionWrapper() {
  return <TechnologiesSection />;
}
