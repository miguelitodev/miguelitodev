import { Repository } from "@/types";

export function RepositoryCard({ repo }: { repo: Repository }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-black/80 text-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 flex flex-col justify-between h-48 overflow-hidden"
    >
      <h3 className="text-xl font-bold">{repo.name}</h3>
      <p className="mt-2 text-gray-400 line-clamp-2">
        {repo.description || "No description provided."}
      </p>
    </a>
  );
}