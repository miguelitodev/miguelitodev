"use client";

import { useEffect } from "react";
import { ErrorMessage } from "@/components/shared";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <ErrorMessage
      error={error.message || "Something went wrong."}
      showRetry
      onRetry={reset}
    />
  );
}
