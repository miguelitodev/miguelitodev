
"use client";

import { useEffect, useState, useRef } from "react";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

    const handleWheel = (event: WheelEvent) => {
      if (scrollContainerRef.current) {
        event.preventDefault();
        scrollContainerRef.current.scrollLeft += event.deltaY;
      }
    };

    const currentRef = scrollContainerRef.current;
    if (currentRef) {
      currentRef.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="mt-6">
      <div
        ref={scrollContainerRef}
        className="flex items-center overflow-x-auto space-x-4 pb-4 scrollbar-hide py-3 border border-red-500"
      >
        {repos.map((repo) => (
          <div key={repo.id} className="flex-none w-[500px]">
            <RepositoryCard repo={repo} />
          </div>
        ))}
        <Link href="/repositories" className="ml-4 flex-shrink-0">
          <ArrowRainbowRight />
        </Link>
      </div>
    </div>
  );
}
