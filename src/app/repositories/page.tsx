import { ListRepositories } from "./components/ListRepositories";
import { Suspense } from "react";
import { Loading } from "./components/ListRepositories/loading";

interface RepositoriesProps {
  searchParams?: {
    page?: string;
  };
}

// `searchParams` is injected by Next.js from the URL (?page=...)
export default function Repositories({ searchParams }: RepositoriesProps) {
  const pageParam = Number(searchParams?.page);
  const currentPage = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  return (
    <div className="flex flex-col justify-center lg:w-5/6 mx-auto max-sm:w-full pt-8">
      <div className="flex flex-col lg:w-5/6 max-sm:w-full mx-0">
        <div className="mb-16">
          <h1
            aria-label="Repositories page heading"
            className="text-white text-7xl max-sm:text-4xl max-xs:text-2xl font-bold font-merriweather max-md:mb-4 mb-4"
          >
            <span className="font-mono text-sm text-white">miguelito.dev/</span>
            Repositories
          </h1>
          <p className="text-white font-light font-merriweather text-2xl max-xl:text-xl max-md:text-lg max-sm:text-md leading-loose">
            A showcase of my most recent GitHub repositories, including
            open-source contributions, personal projects, and experiments with
            modern web technologies.
          </p>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        <ListRepositories currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
