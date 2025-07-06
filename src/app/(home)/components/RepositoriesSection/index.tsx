
import { ListRepositories } from "./ListRepositories";

export function RepositoriesSection() {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-white mb-8 font-merriweather">
        <span className="font-mono text-sm">miguelito.dev/</span>
        repositories
      </h2>
      <ListRepositories />
      
    </div>
  );
}
