"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import ExperienceCard from "./components/ExperienceCard";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { experiences } from "@/data";

export default function Experiences() {
	return (
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
	);
}
