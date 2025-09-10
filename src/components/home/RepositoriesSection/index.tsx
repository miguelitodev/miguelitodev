import { ListRepositories } from './ListRepositories';

export function RepositoriesSection() {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-white mb-2 font-merriweather">
        Repositories
      </h2>
      <p className="text-gray-400 mb-8">My latest repositories on GitHub.</p>
      <ListRepositories />
    </div>
  );
}
