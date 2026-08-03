import { cache } from "react";
import { z } from "zod";
import { mapGitHubUser, mapGitHubUserDetails,mapGitHubRepo } from "./mapper";
import { GitHubSearchSchema, GitHubUserDetailsSchema,GitHubRepoSchema} from "./schemas";
import { GitHubUser,GitHubUserDetails, GitHubRepo } from "./types";

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

export const getUserRepos= cache(
  async (login: string): Promise<GitHubRepo[]> => {
    const response = await fetch(
      `${BASE_URL}/users/${encodeURIComponent(login)}/repos`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch repos.");
    }

    const json = await response.json();

    // Validate
    const data = z.array(GitHubRepoSchema).parse(json);

    // Transform
    return data.map(mapGitHubRepo);
  }
);

export const getRepository=cache(
    async (owner: string, repo: string): Promise<GitHubRepo> => {
        const response = await fetch(
          `${BASE_URL}/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`,
          {
            cache: "no-store",
          }
        );
       
    
        if (!response.ok) {
          throw new Error("Failed to fetch repo.");
        }
    
        const json = await response.json();
    
        // Validate
        const data = GitHubRepoSchema.parse(json);
    
        // Transform
        return mapGitHubRepo(data);
      }
)