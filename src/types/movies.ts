export interface Movie {
  title: string;
  link: string;
  poster: string;
  rating: string;
  year: string;
}

export interface MoviesApiResponse {
  movies: Movie[];
}
