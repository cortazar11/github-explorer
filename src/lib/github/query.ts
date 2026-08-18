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

export function buildContributionSearchQuery(
  query: string,
  filters: ContributionSearchFilters
): string {
  const parts = [query];
      
  if (filters.label) {
    parts.push(`label:${filters.label}`);
  }   

  if (filters.language) {
    parts.push(`language:${filters.language}`);
  } 

  

  return parts.join(" ");

}