"use client";

import Link from "next/link";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import { ButtonFlashing } from "@/components";
import { LocationContext } from "@/context";
import { socialMedias } from "@/data";

export function Header() {
	const [contactOpen, setContactOpen] = useState<boolean>(false);
	const { text } = useContext(LocationContext);

	// Efeito para desabilitar o scroll da página quando o menu estiver aberto
	useEffect(() => {
		if (contactOpen) {
			document.body.style.overflow = "hidden"; // Desabilita o scroll
		} else {
			document.body.style.overflow = "auto"; // Restaura o scroll
		}

		return () => {
			document.body.style.overflow = "auto"; // Restaura o scroll ao desmontar o componente
		};
	}, [contactOpen]);

	return (
		<motion.div
			initial={{ top: 300, opacity: 0 }}
			animate={{ top: 0, opacity: 1 }}
			exit={{ top: -300, opacity: 0 }}
			className="w-full relative flex flex-col items-center mb-32 max-md:mb-12"
		>
			<div className="w-full p-0 sm:p-4 m-auto">
				<header className="w-full flex items-center justify-between ">
					<ul>
						<li>
							<span className="text-white font-mono font-bold text-sm fixed">
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
					<ButtonFlashing
						onClick={() => {
							setContactOpen((prevState) => !prevState);
						}}
						className="hidden sm:block p-0" // Botão visível no desktop
					>
						{contactOpen ? "Close" : "Contact me"}
					</ButtonFlashing>
				</header>
			</div>

			{contactOpen && (
				<motion.div
					className={`fixed z-10 right-0 w-64 bg-black text-white transition-transform ease-in-out transform ${
						contactOpen ? "translate-x-0" : "translate-x-full"
					}`}
					style={{ minHeight: "calc(100% - 1.5rem)" }}
					initial={{ opacity: 0, x: 300 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 300 }}
				>
					<div className="flex justify-end p-4">
						<ButtonFlashing
							onClick={() => setContactOpen(false)}
							className="text-white"
						>
							Close
						</ButtonFlashing>
					</div>
					<ul className="flex flex-col items-center justify-start gap-5 px-4">
						{socialMedias.map((socialMedia, index) => (
							<motion.li
								layout
								key={index}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="w-full" // Make each item take full width
							>
								<Link
									href={socialMedia.link}
									passHref
									rel="noopener noreferrer"
									target="_blank"
								>
									<motion.button
										key={socialMedia.id}
										exit={{ opacity: 0, y: -50 }}
										initial={{ "--x": "100%", scale: 1 }}
										animate={{ "--x": "-100%" }}
										whileTap={{ scale: 0.7 }}
										transition={{
											delay: index * 0.335,
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
										className="relative radial-gradient w-full p-2 rounded-md"
									>
										<span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
											{socialMedia.name}
										</span>
										<span className="block absolute inset-0 rounded-md p-px linear-overlay" />
									</motion.button>
								</Link>
							</motion.li>
						))}
					</ul>
				</motion.div>
			)}
		</motion.div>
	);
}
