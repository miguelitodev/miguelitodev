import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Miguel Riquelme | Frontend Developer",
  description:
    "Welcome to my portfolio! I build modern and accessible web applications using React, Next.js, and TypeScript.",
  openGraph: {
    title: "Miguel Riquelme | Frontend Developer",
    description:
      "Check out my projects, blog, and experience in frontend development.",
    url: "https://miguelito.dev",
    type: "website",
    images: [
      {
        url: "https://miguelito.dev/img/og.png",
        width: 1200,
        height: 630,
        alt: "Miguel Riquelme - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Riquelme | Frontend Developer",
    description:
      "I build high-quality frontend applications with React, Next.js, and TypeScript.",
    images: ["https://miguelito.dev/img/og.png"],
  },
  robots: "index, follow",
};
