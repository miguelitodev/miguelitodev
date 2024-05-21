import { ButtonFlashing } from "@/components";
import { socialMedias } from "@/data";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export function Header() {
	const [contactOpen, setContactOpen] = useState<boolean>(false);
	const [location, setLocation] = useState({
		tz_id: "",
		text: "",
		country: "",
	});

	return (
		<motion.div
			initial={{ top: 300, opacity: 0 }}
			animate={{ top: 0, opacity: 1 }}
			exit={{ top: -300, opacity: 0 }}
			className="w-full relative flex flex-col items-center"
		>
			<div className="xl:w-1/2 w-full p-4 m-auto">
				<header className="w-full flex items-center justify-between">
					<ul>
						<li>
							<span className="text-white font-mono font-bold text-lg">
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
										location?.text,
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
					>
						{contactOpen ? "Close" : "Contact me"}
					</ButtonFlashing>
				</header>
			</div>

			{contactOpen && (
				<motion.div
					key="contact"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -50 }}
					transition={{ duration: 0.5 }}
					className="w-1/2 m-auto p-4"
				>
					<ul className="flex flex-row gap-5 flex-wrap">
						{socialMedias.map((socialMedia, index) => (
							<motion.li
								layout
								key={index}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -50 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
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
										initial={{ "--x": "100%", scale: 1 } as any}
										animate={{ "--x": "-100%" } as any}
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
										className="relative radial-gradient p-5 rounded-md"
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
