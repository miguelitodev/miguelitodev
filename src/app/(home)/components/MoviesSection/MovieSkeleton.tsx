import React from "react";

export function MovieSkeleton() {
  return (
    <div className="flex flex-col space-y-3 animate-pulse">
      <div className="h-48 bg-gray-300 rounded-md"></div>
      <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
    </div>
  );
}
