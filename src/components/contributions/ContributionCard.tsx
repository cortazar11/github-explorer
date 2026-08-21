import type {GitHubIssue} from "@/lib/github";

type ContributionCardProps = {
    issue: GitHubIssue;
};

export function ContributionCard ( { issue }: ContributionCardProps){
    return (
          <article className="rounded-lg border p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                <p className="text-sm text-muted-foreground">
                    Issue #{issue.number}
                </p>

                <h2 className="mt-1 text-lg font-semibold">
                    <a
                    href={issue.issueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    >
                    {issue.title}
                    </a>
                </h2>
                </div>

                <span className="rounded-full border px-3 py-1 text-sm">
                {issue.state}
                </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {issue.labels.map((label) => (
                <span
                    key={label.name}
                    className="rounded-full bg-gray-100 px-2 py-1 text-xs"
                >
                    {label.name}
                </span>
                ))}
            </div>

            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
                <p>
                Author:{" "}
                    <a
                        href={`https://github.com/${issue.user.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline"
                    >
                        {issue.user.username}
                    </a>
                </p>

                <p>Comments: {issue.comments}</p>

                <p>
                Created: {new Date(issue.createdAt).toLocaleDateString()}
                </p>
            </div>

            <div className="mt-4">
                <a
                href={issue.repositoryHtmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 hover:underline"
                >
                View repository →
                </a>
            </div>
        </article>
    );

}