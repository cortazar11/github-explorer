import type { GitHubIssue } from "@/lib/github";
import { ContributionCard } from "./ContributionCard";

type ContributionGridProps = {
  issues: GitHubIssue[];
};

export function ContributionGrid({
    issues,
    }: ContributionGridProps) {
        if (issues.length === 0) {
            return (
            <p className="mt-8 text-muted-foreground">
                No contributions found.
            </p>
            );
        }

        return (
            <div className="grid gap-6 md:grid-cols-2">
            {issues.map((issue) => (
                <ContributionCard
                    key={issue.id}
                    issue={issue}
                />
            ))}
            </div>
        );
}