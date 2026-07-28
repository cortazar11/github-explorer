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