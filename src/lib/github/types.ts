export type GitHubUser = {
  username: string;
  avatarUrl: string;
  profileUrl: string;
};

export type GitHubUserDetails = {
  login: string;
  name?: string;
  avatarUrl: string;
  bio?: string;
  followers: number;
  following: number;
  publicRepos: number;
  location?: string;
  company?: string;
  blog?: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  owner: string;
  homepage?:string;
  license?: string ;
  description?: string;
  stargazersCount: number;
  language?: string;
  repoUrl: string;
  forksCount: number;
  openIssuesCount: number;
  defaultBranch: string;
  visibility: "public" | "private";
  createdAt: string;
  updatedAt: string;
  topics: string[];
  parent?: string;
  pushedAt: string;
  archived: boolean;
  fork: boolean;
};

export type UserSearchFilters = {
  repos?: string;
  location?: string;
  language?: string;
  followers?: string;
};

export type RepositorySearchFilters = {
  inDescription?: boolean;
  repoFollowers?: string;
  forks?: string;
  stars?: string;
  pushedAfter?: string;
  language?: string;
};

export type ContributionSearchFilters = {
  state?: "open" | "closed";
  label?: string;
  language?: string;
  repo?: string;
  created?: string;
  updated?: string;
};

export type GitHubIssue = {
  id: number;
  title: string;
  number: number;
  issueUrl: string;

  state: "open" | "closed";

  user: {
    username: string;
    avatarUrl: string;
  };

  labels: {
    name: string;
  }[];

  comments: number;
  createdAt: string;
  updatedAt: string;
  repositoryUrl: string;
  
};  