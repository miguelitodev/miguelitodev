"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidemenu = () => {
	const currentPath = usePathname();

	const menuItems = [
		{ label: "Home", href: "/", excludeFrom: "/" },
		{ label: "Projects", href: "/projects" },
		{ label: "Experiences", href: "/experiences" },
		{ label: "Tecnologies", href: "/tecnologies" },
	];

	return (
		<ul className="space-y-4 flex flex-col items-end">
			{menuItems.map(
				(item) =>
					currentPath !== item.href && (
						<motion.li
							key={item.label}
							initial={{ "--x": "100%", scale: 1 }}
							animate={{ "--x": "-100%" }}
							transition={{
								repeat: Infinity,
								repeatType: "loop",
								repeatDelay: 1,
								type: "spring",
								stiffness: 20,
								damping: 15,
								mass: 2,
								scale: {
									type: "spring",
									stiffness: 10,
									damping: 5,
									mass: 0.1,
								},
							}}
							className="relative"
						>
							<Link
								href={item.href}
								passHref
								className="text-neutral-100 tracking-wide font-light relative linear-mask font-merriweather text-lg"
							>
								{item.label}
							</Link>
							<ChevronRightIcon className="h-5 w-5 text-neutral-100 inline-block ml-2" />
						</motion.li>
					)
			)}
		</ul>
	);
};
