
import { Repository } from "@/types";
import Link from "next/link";

export function RepositoryCard({ repo }: { repo: Repository }) {
  return (
    <Link
      href={repo.html_url}
      target="_blank"
      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <h3 className="text-white font-bold text-lg mb-2">{repo.name}</h3>
      <p className="text-gray-400 text-sm">{repo.description}</p>
    </Link>
  );
}
