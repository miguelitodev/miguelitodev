
import { Suspense } from "react";
import { ListMovies } from "./components/ListMovies";
import { Loading } from "./components/ListMovies/loading";

export default function Movies() {
  return (
    <div className="flex flex-col justify-center lg:w-5/6 mx-auto max-sm:w-full pt-8">
      <div className="flex flex-col lg:w-5/6 max-sm:w-full mx-0">
        <div className="mb-16">
          <h1
            aria-label="Movies page heading"
            className="text-white text-7xl max-sm:text-4xl max-xs:text-2xl font-bold font-merriweather max-md:mb-4 mb-4"
          >
            <span className="font-mono text-sm text-white">miguelito.dev/</span>
            Movies
          </h1>
          <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
            A collection of films I&apos;ve recently watched and reviewed on
            Letterboxd, showcasing my love for cinema and storytelling.
          </p>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <ListMovies />
      </Suspense>
    </div>
  );
}
