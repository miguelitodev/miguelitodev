export function Loading() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="p-6 bg-black/40 rounded-lg animate-pulse space-y-4 w-full"
        >
          <div className="h-6 bg-gray-600 rounded w-3/4" />
          <div className="h-4 bg-gray-700 rounded w-full" />
          <div className="h-4 bg-gray-700 rounded w-5/6" />
          <div className="h-4 bg-gray-700 rounded w-1/2 mt-2" />
        </div>
      ))}
    </>
  );
}
