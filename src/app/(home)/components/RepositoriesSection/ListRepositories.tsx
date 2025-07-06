"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Repository } from "@/types";
import { RepositoryCard } from "./RepositoryCard";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { Loading } from "./loading";

export function ListRepositories() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get<Repository[]>("/api/repositories");
        setRepos(res.data);
      } catch (e: unknown) {
        const err = e as Error;
        setError(err.message || "Unknown error occurred while fetching repositories.");
      }
      finally {
        setIsLoading(false);
      }
    };

    void fetchRepos();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {repos.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}