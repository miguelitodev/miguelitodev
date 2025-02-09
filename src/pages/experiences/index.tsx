import { Page } from "@/template";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import ExperienceCard from "./components/ExperienceCard";
import "swiper/css";
import "swiper/css/effect-coverflow";

interface Experience {
	companyName: string;
	companyLocation: string;
	position: string;
	duration: string;
	description: string;
}

const experiences: Experience[] = [
	{
		companyName: "International Voyager Inc",
		companyLocation: "Morristown, New Jersey, United States · Remote",
		position: "Frontend Developer",
		duration: "Nov 2024 - Dec 2024 · 2 months",
		description:
			"Worked on the redesign of one of the company’s websites, making it more attractive and ensuring compatibility with smartphones and tablets, all done remotely.",
	},
	{
		companyName: "Printi - a Cimpress company",
		companyLocation: "Barueri, São Paulo, Brazil · Remote",
		position: "Frontend Developer (Mid-Level)",
		duration: "Apr 2023 - Aug 2024 · 1 year 5 months",
		description:
			"Recently promoted to Mid-Level Frontend Developer, I’m excited to embark on this new phase of my professional journey. With a proven track record of delivering exceptional frontend solutions and a passion for pushing boundaries, I’m eager to leverage my skills and expertise to drive innovation and success in this role.",
	},
	{
		companyName: "Printi - a Cimpress company",
		companyLocation: "Barueri, São Paulo, Brazil",
		position: "Junior Frontend Developer",
		duration: "May 2021 - Apr 2023 · 2 years",
		description:
			"I worked as a React Frontend Developer at Printi. Printi is an innovative online printing company that offers high-quality digital and offset printing at affordable prices. I was responsible for maintaining and improving applications, bringing solutions, and implementing initiatives to add value to the websites.",
	},
	{
		companyName: "etikett.de",
		companyLocation: "Germany · Remote",
		position: "Frontend Developer",
		duration: "Dec 2022 - Aug 2023 · 9 months",
		description:
			"I worked as a Frontend Developer, contributing to the completion of the company’s new online store by creating new pages, implementing new features, and improving the code to make it more robust. Using technologies like Next.js, TypeScript, and WordPress CMS, I ensured seamless integration and enhanced the user experience.",
	},
	{
		companyName: "EVVE",
		companyLocation: "São Paulo, Mogi das Cruzes",
		position: "Mobile and Frontend Developer",
		duration: "Feb 2020 - Nov 2020 · 10 months",
		description:
			"I interned at EVVE as a Mobile and Frontend Developer, where I used React Native for mobile development and fundamental web development technologies like HTML5, CSS3, and JavaScript. I was responsible for the frontend of websites, systems, and applications. During this period, I improved my React Native skills and explored other technologies. I also contributed to the launch of an app published on the App Store.",
	},
];

export default function Experiences() {
	return (
		<Page>
			<div className="w-4/5 max-lg:w-full mx-auto">
				<Swiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 600,
						modifier: 1,
						slideShadows: false,
					}}
					modules={[EffectCoverflow]}
					className="experienceSwiper"
					loop={true}
				>
					{experiences.map((experience, index) => (
						<SwiperSlide key={index} className="!h-auto py-4">
							<ExperienceCard
								companyLocation={experience.companyLocation}
								companyName={experience.companyName}
								description={experience.description}
								duration={experience.duration}
								position={experience.position}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Page>
	);
}
