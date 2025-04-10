type LocationData = {
  country: string;
  tz_id: string;
  text: string;
};

type WeatherAPIResponse = {
  location: {
    country: string;
    tz_id: string;
    name: string;
    region: string;
  };
  current: {
    temp_c: number;
    temp_f: number;
  };
};

export async function fetchLocationData(): Promise<LocationData> {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=auto:ip`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch location data");
    }

    // Fazendo o cast explícito para o tipo WeatherAPIResponse
    const data = (await response.json()) as WeatherAPIResponse;

    return {
      country: data.location.country,
      tz_id: data.location.tz_id,
      text: `${data.location.name}, ${data.location.region} - ${data.current.temp_c}°C / ${data.current.temp_f}°F`,
    };
  } catch (error) {
    console.error(error);
    return {
      country: "",
      tz_id: "",
      text: "",
    };
  }
}
