import { GitHubRepo } from "@/lib/github";
import Link from "next/link";

type RepositoryCardProps = {
  repo: GitHubRepo;
};

export function RepositoryCard({ repo }: RepositoryCardProps) {
  return (
    <article className="
            h-full
            rounded-xl
            border
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-lg
        ">
     <h3>
      <Link href={`/repo/${repo.owner}/${repo.name}`}>
        {repo.name}
      </Link>
    </h3>
    
      <h3 className="text-xl font-semibold text-slate-900">{repo.name}</h3>
      {repo.description && (
            <p className="mt-2 text-slate-600">
                {repo.description}
            </p>
        )}

      <div  className="mt-4 flex flex-wrap items-center gap-6 text-sm font-medium text-slate-700">
        <span className="flex items-center gap-1">
          ⭐
          {repo.stargazersCount}
        </span>
        <span className="flex items-center gap-1">
          🍴
          {repo.forksCount}
        </span>
        {repo.language && (
            <span  className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                {repo.language}
            </span>
        )}
      </div>
        <Link
            href={repo.repoUrl}
            target="_blank"
            className="
                mt-5
                inline-flex
                text-sm
                font-medium
                text-blue-600
                hover:underline
            "
        >
            View on GitHub →
        </Link>
        <div>Updated at: {repo.updatedAt}</div>
    </article>
    
  );
}