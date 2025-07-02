import { Movie } from "./movie";

export type { License, Owner, Repository } from "./github";
export type { Movie };

export interface MoviesApiResponse {
  movies: Movie[];
}
