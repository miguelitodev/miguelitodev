export async function fetchLocationData() {
	try {
		const apiKey = process.env.WEATHER_API_KEY;
		const response = await fetch(
			`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip`
		);

		if (!response.ok) {
			throw new Error("Failed to fetch location data");
		}

		const data = await response.json();

		return {
			country: data.location.country,
			tz_id: data.location.tz_id,
			text: `${data.location.name}, ${data.location.region} - ${data.current.temp_c}°C / ${data.current.temp_f}°F`,
		};
	} catch (error) {
		console.error(error);
		return {};
	}
}
