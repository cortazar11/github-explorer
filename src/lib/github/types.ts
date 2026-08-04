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