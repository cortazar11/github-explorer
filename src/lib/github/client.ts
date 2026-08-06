import { cache } from "react";
import { z } from "zod";
import { mapGitHubUser, mapGitHubUserDetails,mapGitHubRepo } from "./mapper";
import { GitHubSearchSchema, GitHubUserDetailsSchema,GitHubRepoSchema, GitHubUserSchema} from "./schemas";
import { GitHubUser,GitHubUserDetails, GitHubRepo } from "./types";

const BASE_URL = "https://api.github.com";

type UserSearchOptions = {
  query: string;
  page?: number;
  perPage?: number;
};

type UserSearchResult = {
  total: number;
  users: GitHubUser[];
};

export const searchUsers = cache(async ({
    query,
    page = 1,
    perPage = 100,
  }: UserSearchOptions): Promise<UserSearchResult > => {
 

  const response = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`,
    {
        cache: "no-store",
        }
    );
    

    if (!response.ok) {
     throw new Error("Failed to fetch users.");
    }

    const json = await response.json();

    // 1. Validate
  const data = z.object({
    total_count: z.number(),
    items: z.array(GitHubUserSchema),
  }).parse(json);
    // Transform
  return {
    total: data.total_count,
    users: data.items.map(mapGitHubUser),
  };

 

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

type RepositorySearchOptions = {
    query: string;
    sort?: "stars" | "forks" | "updated";
    order?: "asc" | "desc";
    page?: number;
    perPage?: number;
};

type RepositorySearchResult = {
  total: number;
  repos: GitHubRepo[];
};

export const searchRepositories=cache(
    async ({query, sort,order, page, perPage}: RepositorySearchOptions): Promise<RepositorySearchResult> => {  
        const response = await fetch(
          `${BASE_URL}/search/repositories?q=${encodeURIComponent(query)}&sort=${encodeURIComponent(sort ?? "")}&order=${encodeURIComponent(order ?? "")}&page=${page ?? 1}&per_page=${perPage ?? 100}`,
          {
            cache: "no-store",
          }
        );  
        if (!response.ok) {
          throw new Error("Failed to fetch repos.");
        }   

        const json = await response.json();   
        
        
// Validate   
        const data = z.object({
            total_count: z.number(),
            items: z.array(GitHubRepoSchema)
        }).parse(json);     

        // Transform      
        return {
            total: data.total_count,
            repos: data.items.map(mapGitHubRepo)
        };

    }       

) 