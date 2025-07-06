
export function Loading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded-lg animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
