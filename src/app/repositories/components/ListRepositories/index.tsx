import axios from "axios";
import { Success } from "./success";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

async function fetchRepos(currentPage: number) {
  try {
    const perPage = 12;
    const res = await axios.get(
      "https://api.github.com/users/miguelitodev/repos?sort=updated&direction=desc",
      {
        params: { per_page: perPage, page: currentPage },
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

export async function ListRepositories({
  currentPage,
}: {
  currentPage: number;
}) {
  try {
    const data = await fetchRepos(currentPage);
    return <Success repos={data} />;
  } catch (e: unknown) {
    const error = e as Error;
    return <ErrorMessage error={error.message || "Something went wrong."} />;
  }
}
