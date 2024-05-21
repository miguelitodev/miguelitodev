import Home from "@/content/Home";
import { fetchLocationData } from "@/api";

type TypeHome = {
	location: { country: string; tz_id: string; text: string };
};

export default function HomePage({ location }: TypeHome) {
	return <Home location={location || {}} />;
}

export async function getServerSideProps() {
	const location = await fetchLocationData();

	return { props: { location } };
}
