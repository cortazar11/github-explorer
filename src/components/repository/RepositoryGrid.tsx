import type { GitHubRepo } from "@/lib/github/types";
import { RepositoryCard } from "./RepositoryCard";

type RepositoryGridProps = {
    repos: GitHubRepo[];
};

export function RepositoryGrid({ repos }: RepositoryGridProps) {
  if (repos.length === 0) {
    return (
      <p className="text-muted-foreground">
        No repos found.
      </p>
    );
  }

    return (                        
        <section
            className="
                grid
                gap-4
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-4
            " 
        >
      {repos.map((repo) => (
        <RepositoryCard          
            key={repo.id}         
            repo={repo}         
        />
      ))}
    </section>
  );
}
