"use client";

import { ButtonFlashing } from "@/components/shared";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-white text-5xl font-bold font-merriweather mb-4">
        404 – Página não encontrada
      </h1>
      <p className="text-neutral-400 text-lg font-mono max-w-xl mb-8">
        A página que você procurou não existe ou foi movida.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" passHref>
          <ButtonFlashing action={() => {}}>
            Voltar para o início
          </ButtonFlashing>
        </Link>
      </div>
    </div>
  );
}
