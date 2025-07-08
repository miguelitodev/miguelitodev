export function Loading() {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4 scrollbar-hide mb-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex-shrink-0 w-80 bg-gray-800 p-4 rounded-lg animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}