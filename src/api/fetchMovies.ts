import { MoviesApiResponse } from "@/types";

export const fetchMovies = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/movies`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as MoviesApiResponse;
    return { movies: data.movies };
  } catch (error) {
    console.error('Error fetching movies from API:', error);
    return { movies: [] };
  }
};
