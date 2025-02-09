import HomePage from "./(home)/index";
import { fetchLocationData } from "@/api";

type TypeHome = {
	location: { country: string; tz_id: string; text: string };
};

export default function Home({ location }: TypeHome) {
	return <HomePage location={location || {}} />;
}

export async function getServerSideProps() {
	const location = await fetchLocationData();

	return { props: { location } };
}
