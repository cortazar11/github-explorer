import type { GitHubApiUser } from "./schemas";
import type { GitHubUser } from "./types";

export function mapGitHubUser(user: GitHubApiUser): GitHubUser {
  return {
    username: user.login,
    avatarUrl: user.avatar_url,
    profileUrl: user.html_url,
  };
}