import { useContext, useEffect, useState } from "react";

import { Welcome } from "./components/Welcome";
import { Page } from "@/template";
import { LocationContext } from "@/context";
import { Sidemenu } from "@/components";

// Removido o ButtonFlashing, pois não está sendo utilizado no código

type TypeHomePage = {
	location: { country: string; tz_id: string; text: string };
};

export default function HomePage({ location }: TypeHomePage) {
	const [opened, setOpened] = useState<boolean>(false);

	const { setDataLocation } = useContext(LocationContext);

	useEffect(() => {
		setDataLocation(location);
	}, [setDataLocation, location]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setOpened(true);
		}, 10000);

		return () => clearTimeout(timer);
	}, []);

	if (!opened) return <Welcome setOpened={setOpened} />;

	return (
		<Page>
			<div className="w-full flex flex-row justify-between px-8 max-md:flex-col-reverse max-md:gap-16">
				<div className="w-3/5 max-md:w-full">
					<h1 className="text-white text-5xl max-xl:text-4xl max-md:text-2xl font-bold font-merriweather mb-8">
						Hi, I&apos;m Miguel Riquelme
					</h1>
					<p className="text-white font-light font-merriweather text-3xl max-xl:text-2xl max-md:text-xl  leading-loose">
						I develop user interfaces and enhance user experiences using web
						technologies. With 5 years of experience, I build responsive and
						efficient web applications while solving real-world user problems.
					</p>
				</div>
				<div>
					<Sidemenu />
				</div>
			</div>
		</Page>
	);
}
