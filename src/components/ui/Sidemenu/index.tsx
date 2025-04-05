"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ButtonFlashing } from "@/components/shared";
import { SidemenuContext } from "@/context";
import {
  personalSocialMedias,
  professionalSocialMedias,
} from "@/data/socialMedias";

export const Sidemenu = () => {
  const currentPath = usePathname();
  const { isMenuOpen, setIsMenuOpen } = useContext(SidemenuContext);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experiences", href: "/experiences" },
    { label: "Technologies", href: "/technologies" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 max-md:bg-opacity-100 z-40"
          onClick={() => setIsMenuOpen!(false)}
        ></motion.div>
      )}

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? "0%" : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 w-3/4 max-w-md max-md:w-full h-screen bg-darkText z-50 p-6 overflow-y-auto"
      >
        <div className="w-full flex items-center justify-between border-b border-gray-700 pb-4 mb-10">
          <div></div>
          <IoMdClose
            size={30}
            className="text-gray-400 cursor-pointer"
            onClick={() => setIsMenuOpen!(false)}
          />
        </div>

        <h3 className="uppercase text-gray-400 font-bold text-sm mb-4">
          Pages
        </h3>
        <ul className="flex flex-col gap-6 mt-6">
          {menuItems.map(
            (item) =>
              currentPath !== item.href && (
                <li key={item.label}>
                  <Link href={item.href} passHref>
                    <motion.a
                      whileHover={{ x: 6 }}
                      className="group text-neutral-100 font-bold text-md cursor-pointer flex items-center hover:text-gray-400 transition-colors duration-200"
                      onClick={() => setIsMenuOpen!(false)}
                    >
                      {item.label}
                      <motion.span
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                        className="ml-2 text-neutral-100 group-hover:text-gray-400"
                      >
                        <FaChevronRight className="h-5 w-5" />
                      </motion.span>
                    </motion.a>
                  </Link>
                </li>
              )
          )}
        </ul>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <h3 className="uppercase text-gray-400 font-bold text-sm mb-4">
            Professional
          </h3>
          <div className="flex flex-wrap gap-2 mt-6 justify-start">
            {professionalSocialMedias.map((media) => (
              <ButtonFlashing
                key={media.id}
                action={() => {
                  window.open(media.link, "_blank");
                  setIsMenuOpen!(false);
                }}
                className="px-4 py-2 text-sm text-left"
              >
                {media.name}
              </ButtonFlashing>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <h3 className="uppercase text-gray-400 font-bold text-sm mb-4">
            Personal
          </h3>
          <div className="flex flex-wrap gap-2 mt-6 justify-start">
            {personalSocialMedias.map((media) => (
              <ButtonFlashing
                key={media.id}
                action={() => {
                  window.open(media.link, "_blank");
                  setIsMenuOpen!(false);
                }}
                className="px-4 py-2 text-sm text-left"
              >
                {media.name}
              </ButtonFlashing>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};
