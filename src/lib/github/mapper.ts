import type { GitHubApiUser,GitHubApiUserDetails } from "./schemas";
import type { GitHubUser, GitHubUserDetails } from "./types";

export function mapGitHubUser(user: GitHubApiUser): GitHubUser {
  return {
    username: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
  };
}

export function mapGitHubUserDetails(user: GitHubApiUserDetails): GitHubUserDetails {
  return {
    login: user.login,
    name:user.name ?? undefined,
    avatarUrl:user.avatar_url,
    bio: user.bio ?? undefined,
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    location: user.location ?? undefined,
    company:user.company ?? undefined,
    blog: user.blog || undefined
  }
}