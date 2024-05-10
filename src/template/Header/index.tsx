import { motion } from "framer-motion";
import { ButtonFlashing } from "@/components";
import { useState } from "react";
import { socialMedias } from "@/data";
import Link from "next/link";

type IHeader = {
	welcomeMessage?: string;
};

export const Header = ({ welcomeMessage }: IHeader) => {
	const [contactOpen, setContactOpen] = useState<boolean>(false);

	return (
		<motion.div
			initial={{ top: 300, opacity: 0 }}
			animate={{ top: 0, opacity: 1 }}
			exit={{ top: -300, opacity: 0 }}
			className="relative flex flex-col items-center"
		>
			<div className="xl:w-1/2 w-full p-4 m-auto">
				<header className="w-full flex items-center justify-between">
					<ul>
						<li>
							<span className="text-white font-mono font-bold text-lg">
								{welcomeMessage || "Hi, welcome!"}
							</span>
						</li>
					</ul>

					<ButtonFlashing
						onClick={() => {
							setContactOpen((prevState) => !prevState);
						}}
					>
						Contact me
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
										initial={{ "--x": "100%", scale: 1 }}
										animate={{ "--x": "-100%" }}
										whileTap={{ scale: 0.7 }}
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
};
