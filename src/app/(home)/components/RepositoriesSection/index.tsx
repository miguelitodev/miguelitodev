
import { Suspense } from "react";
import Link from "next/link";
import { ListRepositories } from "./ListRepositories";
import { ArrowRainbowRight } from "@/assets/icons";
import { Loading } from "./loading";

export function RepositoriesSection() {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-white mb-8 font-merriweather">
        <span className="font-mono text-sm">miguelito.dev/</span>
        repositories
      </h2>
      <Suspense fallback={<Loading />}>
        <ListRepositories />
      </Suspense>
      <div className="w-full flex justify-end">
        <Link
          href="/repositories"
          className="text-white font-mono text-lg flex items-center gap-2 group"
        >
          see all repositories
          <ArrowRainbowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
