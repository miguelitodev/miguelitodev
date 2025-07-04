
export const MovieSkeleton = () => {
  return (
    <div className="block rounded-lg overflow-hidden border border-gray-700 bg-darkText shadow-lg transform transition-transform duration-200 animate-pulse">
      <div className="relative w-full h-72 bg-gray-800 rounded-t-lg"></div>
      <div className="p-4 bg-darkText rounded-b-lg">
        <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-700 rounded w-1/2"></div>
        <div className="flex items-center mt-2">
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
};
