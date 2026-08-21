import type {
  UserSearchFilters,
  RepositorySearchFilters,
  ContributionSearchFilters,
} from "./types";

export function buildUserSearchQuery(
  query: string,
  filters: UserSearchFilters
): string {
  const parts = [query];

  if (filters.repos) {
    parts.push(`repos:${filters.repos}`);
  }

  if (filters.location) {
    parts.push(`location:${filters.location}`);
  }

  if (filters.language) {
    parts.push(`language:${filters.language}`);
  }

  if (filters.followers) {
    parts.push(`followers:${filters.followers}`);
  }

  return parts.join(" ");
}

export function buildRepositorySearchQuery(
  query: string,
  filters: RepositorySearchFilters
): string {
  const parts = [query];

  if (filters.inDescription) {
    parts.push("in:description");
  }

  if (filters.repoFollowers) {
    parts.push(`repoFollowers:${filters.repoFollowers}`);
  }

  if (filters.forks) {
    parts.push(`forks:${filters.forks}`);
  }

  if (filters.stars) {
    parts.push(`stars:${filters.stars}`);
  }

  if (filters.pushedAfter) {
    parts.push(`pushed:>=${filters.pushedAfter}`);
  }

  if (filters.language) {
    parts.push(`language:${filters.language}`);
  }

  return parts.join(" ");
}

function getDateDaysAgo(days: number): string {
  const date = new Date();

  date.setDate(date.getDate() - days);

  return date.toISOString().split("T")[0];
}

export function buildContributionSearchQuery(
  query: string,
  filters: ContributionSearchFilters
): string {
  const parts = [query];

    if (filters.state) {
       parts.push("is:issue");
     parts.push(`is:${filters.state}`);
    }
      
  if (filters.label) {
    parts.push(`label:"${filters.label}"`);
  }   

  if (filters.language) {
    parts.push(`language:${filters.language}`);
  } 

  if (filters.repo) {
    parts.push(`repo:${filters.repo}`);
  }

  if (filters.created) {
    parts.push(`created:>${getDateDaysAgo(filters.created)}`);
  }

  if (filters.updated) {
     parts.push(`updated:>${getDateDaysAgo(filters.updated)}`);
  }

  return parts.join(" ");

}