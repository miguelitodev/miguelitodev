
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Repository } from "@/types";
import { RepositoryCard } from "./RepositoryCard";
import { ErrorMessage } from "@/components/shared/ErrorMessage";
import { Loading } from "./loading";
import Link from "next/link";
import { ArrowRainbowRight } from "@/assets/icons";

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
      } finally {
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
    <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide mb-8">
      {repos.map((repo) => (
        <RepositoryCard key={repo.id} repo={repo} />
      ))}
      <Link
        href="/repositories"
        className="flex-shrink-0 w-48 bg-black/80 rounded-lg flex items-center justify-center text-white font-mono text-lg group transform transition duration-300 hover:scale-105"
      >
        <div className="flex items-center gap-2">
          Ver todos
          <ArrowRainbowRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </div>
  );
}
