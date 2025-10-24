export async function getLatestMovies() {
  try {
    const response = await fetch('/api/movies');
    const data = await response.json();
    // Ensure data.movies exists and is an array before using slice
    if (data && Array.isArray(data.movies)) {
      return { movies: data.movies.slice(0, 10) }; // Returns the expected format
    } else {
      console.warn("API returned unexpected structure:", data);
      return { movies: [] };
    }
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return { movies: [] };
  }
}