import { Sidemenu, Footer, Header } from "@/components/ui";
import { LocationProvider, SidemenuProvider } from "@/context";
import "@/styles/globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="bg-gray-900 bg-cover bg-no-repeat font-[Merriweather]"
        style={{
          backgroundImage: "url(/img/bg-home-2.png)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <LocationProvider>
          <SidemenuProvider>
            <main className="h-screen flex flex-col justify-between items-center">
              <Header />
              <div className="w-full flex flex-row justify-between px-8 max-lg:px-4 max-lg:flex-col max-md:flex-col-reverse max-lg:gap-16">
                {children}
                <Sidemenu />
              </div>
              <Footer />
            </main>
          </SidemenuProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
