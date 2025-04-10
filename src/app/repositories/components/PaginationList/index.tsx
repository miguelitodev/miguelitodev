"use client";
import { useRouter } from "next/navigation";

export function PaginationList() {
  const router = useRouter();

  return (
    <ul className="flex gap-2 justify-center mt-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <button
            onClick={() => {
              router.push(`/repositories?page=${i + 1}`);
            }}
            className="px-4 py-2 rounded-2xl bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-all shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}
