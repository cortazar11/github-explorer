import { cache } from "react";
import { mapGitHubUser, mapGitHubUserDetails } from "./mapper";
import { GitHubSearchSchema, GitHubUserDetailsSchema} from "./schemas";
import { GitHubUser,GitHubUserDetails } from "./types";

const BASE_URL = "https://api.github.com";

export const searchUsers = cache(async (query: string): Promise<GitHubUser[] > => {

    const response = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(query)}`,
        {
        cache: "no-store",
        }
    );

    if (!response.ok) {
     throw new Error("Failed to fetch users.");
    }

    const json = await response.json();

    // 1. Validate
  const data = GitHubSearchSchema.parse(json);

  // 2. Transform
  const users=data.items.map(mapGitHubUser);

  return users;

})

export const getUser = cache(
  async (login: string): Promise<GitHubUserDetails> => {
    const response = await fetch(
      `${BASE_URL}/users/${encodeURIComponent(login)}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user.");
    }

    const json = await response.json();

    // Validate
    const data = GitHubUserDetailsSchema.parse(json);

    // Transform
    return mapGitHubUserDetails(data);
  }
);