"use client";

import { format } from "date-fns";
import { motion } from "framer-motion";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInfo } from "react-icons/fa";
import { LocationContext, SidemenuContext } from "@/context";
import { ButtonFlashing } from "@/components/shared";

export function Header() {
  const { text } = useContext(LocationContext);
  const { isMenuOpen, setIsMenuOpen } = useContext(SidemenuContext);

  return (
    <motion.div
      initial={{ top: 300, opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      exit={{ top: -300, opacity: 0 }}
      className="w-full p-4 flex flex-col items-center mb-32 max-md:mb-12"
    >
      <div className="w-full p-0 sm:p-4 m-auto ">
        <header className="w-full flex items-center justify-between ">
          <ul>
            <li>
              <span className="text-white font-mono font-bold text-sm">
                <TypeAnimation
                  sequence={[
                    "Hi, welcome!",
                    1000,
                    "",
                    "Today is " + format(new Date(), "EEEE, do"),
                    1000,
                    "",
                    1000,
                    "",
                    text,
                    1000,
                    "",
                    "5y working with Frontend O.O",
                    1000,
                    "",
                    `Now is ${format(new Date().getTime(), "HH:mm")}`,
                    1000,
                  ]}
                  style={{ fontFamily: "Roboto mono" }}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                />
              </span>
            </li>
          </ul>
          <div className="min-h-10">
            {!isMenuOpen && (
              <ButtonFlashing
                action={() => {
                  setIsMenuOpen!(!isMenuOpen);
                }}
              >
                <FaInfo />
              </ButtonFlashing>
            )}
          </div>
        </header>
      </div>
    </motion.div>
  );
}
