
import axios from "axios";
import { Repository } from "@/types";
import { RepositoryCard } from "./RepositoryCard";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

async function fetchRepos(): Promise<Repository[]> {
  try {
    const perPage = 6;
    const res = await axios.get<Repository[]>(
      "https://api.github.com/users/miguelitodev/repos?sort=updated&direction=desc",
      {
        params: { per_page: perPage, page: 1 },
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    return res.data;
  } catch (e: unknown) {
    const err = e as Error;
    throw new Error(
      err.message || "Unknown error occurred while fetching repositories."
    );
  }
}

export async function ListRepositories() {
  try {
    const data = await fetchRepos();
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {data.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    );
  } catch (e: unknown) {
    const error = e as Error;
    return <ErrorMessage error={error.message || "Something went wrong."} />;
  }
}
