export async function getLatestMovies() {
  try {
    const response = await fetch('/api/movies');
    const data = await response.json();
    return data.movies.slice(0, 10); // Retorna apenas os 10 últimos filmes
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
}