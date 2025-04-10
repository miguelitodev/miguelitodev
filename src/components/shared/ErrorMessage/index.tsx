"use client";

import { MdErrorOutline } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { ButtonFlashing } from "@/components/shared";

interface ErrorMessageProps {
  title?: string;
  error: string;
  showRetry?: boolean;
  onRetry?: () => void;
}

const suggestedPages = [
  { label: "Home", href: "/" },
  { label: "Repositories", href: "/repositories" },
  { label: "Experiences", href: "/experiences" },
  { label: "Technologies", href: "/technologies" },
  { label: "Blog", href: "/blog" },
];

export function ErrorMessage({
  title = "Oops! Something went wrong.",
  error,
  showRetry = false,
  onRetry,
}: ErrorMessageProps) {
  const currentPath = usePathname();
  const router = useRouter();

  const filteredPages = suggestedPages.filter(
    (page) => page.href !== currentPath
  );

  return (
    <div className="flex flex-col items-center justify-center h-full w-full py-10 px-4 text-center gap-4">
      <MdErrorOutline size={48} className="text-red-400" />

      <h1 className="text-white text-3xl max-sm:text-2xl font-bold font-merriweather">
        {title}
      </h1>

      <p className="text-red-400 text-base max-sm:text-sm font-mono">{error}</p>

      {showRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 text-sm rounded bg-red-500 hover:bg-red-600 transition text-white"
        >
          Tentar novamente
        </button>
      )}

      <div className="mt-8">
        <p className="text-white text-sm font-semibold mb-3">
          Talvez você queira ir para:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {filteredPages.map((page) => (
            <ButtonFlashing
              key={page.href}
              action={() => router.push(page.href)}
              className="px-4 py-2 text-sm"
            >
              {page.label}
            </ButtonFlashing>
          ))}
        </div>
      </div>
    </div>
  );
}
