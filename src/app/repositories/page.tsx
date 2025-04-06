/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-floating-promises */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string | null;
  updated_at: string;
}

const gradients = [
  "bg-gradient-to-r from-[rgba(236,72,153,0.6)] to-[rgba(239,68,68,0.6)]",
  "bg-gradient-to-r from-[rgba(139,92,246,0.6)] to-[rgba(99,102,241,0.6)]",
  "bg-gradient-to-r from-[rgba(34,197,94,0.6)] to-[rgba(20,184,166,0.6)]",
  "bg-gradient-to-r from-[rgba(37,99,235,0.6)] to-[rgba(6,182,212,0.6)]",
  "bg-gradient-to-r from-[rgba(252,211,77,0.6)] to-[rgba(249,115,22,0.6)]",
];

const languageColors: Record<string, string> = {
  JavaScript: "bg-yellow-500",
  TypeScript: "bg-blue-600",
  CSS: "bg-blue-800",
  Python: "bg-blue-400",
  Java: "bg-red-600",
  CSharp: "bg-purple-600",
  SCSS: "bg-pink-600",
  Ruby: "bg-red-700",
  Go: "bg-blue-500",
  PHP: "bg-indigo-500",
  Rust: "bg-orange-600",
  HTML: "bg-orange-600",
};

export default function Repositories() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const username = "miguelitodev";

  useEffect(() => {
    const fetchRepos = async () => {
      let allRepos: Repo[] = [];
      let page = 1;
      const perPage = 10;
      let hasMore = true;

      while (hasMore) {
        try {
          setLoading(true);

          const res = await axios.get(
            `https://api.github.com/users/${username}/repos`,
            { params: { per_page: perPage, page } }
          );

          const data = res.data;

          if (Array.isArray(data)) {
            allRepos = [...allRepos, ...data];
            page++;

            if (data.length < perPage) {
              hasMore = false;
            }
          } else {
            console.error("Resposta da API não é um array:", data);
            hasMore = false;
          }
        } catch (error) {
          console.error("Erro ao buscar repositórios:", error);
          hasMore = false;
        } finally {
          setLoading(false);
        }
      }

      allRepos.sort(
        (a, b) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
      setRepos(allRepos);
    };

    fetchRepos();
  }, []);

  return (
    <div className="flex flex-col lg:w-5/6 mx-auto max-sm:w-full pt-8">
      <div className="flex flex-col lg:w-5/6 max-sm:w-full mx-0">
        <div className="mb-16">
          <h1 className="text-white text-7xl max-sm:text-4xl max-xs:text-2xl font-bold font-merriweather max-md:mb-4 mb-4">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:w-5/6 w-full pt-8 lg:pt-0">
        {loading ? (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="p-6 bg-black/40 rounded-lg animate-pulse space-y-4 w-full"
              >
                <div className="h-6 bg-gray-600 rounded w-3/4" />
                <div className="h-4 bg-gray-700 rounded w-full" />
                <div className="h-4 bg-gray-700 rounded w-5/6" />
                <div className="h-4 bg-gray-700 rounded w-1/2 mt-2" />
              </div>
            ))}
          </>
        ) : (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-black/80 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-between"
            >
              {repo.language ? (
                <div className="flex flex-row justify-between items-center w-full">
                  <div
                    className={`px-3 py-1 text-sm font-semibold text-white rounded-lg ${
                      languageColors[repo.language] || "bg-gray-500"
                    }`}
                    style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}
                  >
                    {repo.language}
                  </div>
                  <span className="text-sm text-gray-500 mt-2 text-left">
                    {formatDistanceToNow(new Date(repo.updated_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </div>
              ) : (
                <div></div>
              )}

              <div className="flex justify-between items-center mt-8">
                <h3 className="text-xl font-bold">{repo.name}</h3>
                <FaExternalLinkAlt />
              </div>

              <p className="mt-2 text-gray-400 line-clamp-2">
                {repo.description || "No description provided."}
              </p>

              {repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4 line-clamp-2">
                  {repo.topics.slice(0, 6).map((topic, index) => (
                    <span
                      key={topic}
                      className={`px-3 py-1 text-sm font-semibold text-white rounded-lg ${
                        gradients[index % gradients.length]
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-4 text-gray-300">
                <span className="flex items-center">
                  <FaStar className="mr-1" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <FaCodeBranch className="mr-1" /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))
        )}
      </div>
    </div>
  );
}
