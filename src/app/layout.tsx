import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { Footer, Header, CustomCursor } from "@/components/layout";

export const metadata: Metadata = {
  title: {
    default: "Miguel Riquelme - Creative Developer & Designer",
    template: "%s | Miguel Riquelme",
  },
  description:
    "I develop user interfaces and enhance user experiences using web technologies. Since 2020 working with Front-end, I build responsive and efficient web applications while solving real-world user problems.",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "web development",
    "UI/UX",
    "creative technology",
    "front-end",
    "react",
    "nextjs",
  ],
  authors: [{ name: "Miguel Riquelme", url: "https://miguelito.dev/" }],
  creator: "Miguel Riquelme",
  publisher: "Miguel Riquelme",
  metadataBase: new URL("https://miguelito.dev"),
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miguelito.dev/",
    title: "Miguel Riquelme - Front-end Developer",
    description:
      "I develop user interfaces and enhance user experiences using web technologies. Since 2020 working with Front-end, I build responsive and efficient web applications while solving real-world user problems.",
    siteName: "Miguel Riquelme",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Miguel Riquelme Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Riquelme - Front-end Developer",
    description:
      "I develop user interfaces and enhance user experiences using web technologies. Since 2020 working with Front-end, I build responsive and efficient web applications while solving real-world user problems.",
    images: ["/og-image.png"],
    creator: "@miguelrq_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
  alternates: {
    canonical: "https://miguelito.dev/",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "32x32" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#F8F9FA",
  colorScheme: "light",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-100 overflow-x-hidden`}>
        <CustomCursor />
        <Header />
        <Suspense fallback={<Loading />}>
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
