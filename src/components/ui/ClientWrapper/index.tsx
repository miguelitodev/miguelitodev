"use client";

import { Sidemenu, Footer, Header, MouseGlow } from "@/components/ui";
import { LocationProvider, SidemenuProvider } from "@/context";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(true);

  useEffect(() => {
    setShowTransition(true);
    const timer = setTimeout(() => {
      setShowTransition(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        <LocationProvider>
          <SidemenuProvider>
            <main className="h-screen flex flex-col justify-between items-center relative overflow-x-hidden">
              <MouseGlow />

              <AnimatePresence>
                {showTransition && (
                  <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 1.1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0 z-50 pointer-events-none"
                    style={{
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0.6))",
                    }}
                  />
                )}
              </AnimatePresence>

              <Header />

              <div className="w-full flex flex-row justify-between px-8 max-lg:px-4 max-lg:flex-col max-md:flex-col-reverse max-lg:gap-16">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="flex-1"
                >
                  {children}
                </motion.div>

                <Sidemenu />
              </div>

              <Footer />
            </main>
          </SidemenuProvider>
        </LocationProvider>
      </AnimatePresence>
    </LayoutGroup>
  );
}
