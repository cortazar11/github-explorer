import { cache } from "react";
import { z } from "zod";
import { mapGitHubUser, mapGitHubUserDetails,mapGitHubRepo, mapGitHubIssue } from "./mapper";
import { GitHubSearchSchema, GitHubUserDetailsSchema,GitHubRepoSchema, GitHubUserSchema, GitHubIssueSchema} from "./schemas";
import { GitHubUser,GitHubUserDetails, GitHubRepo,UserSearchFilters, RepositorySearchFilters, ContributionSearchFilters, GitHubIssue } from "./types";
import { buildUserSearchQuery, buildRepositorySearchQuery,buildContributionSearchQuery} from "./query";


const BASE_URL = "https://api.github.com";

type UserSearchOptions = {
  query: string;
  filters?: UserSearchFilters;
  page?: number;
  perPage?: number;
};

type UserSearchResult = {
  total: number;
  users: GitHubUser[];
};

export const searchUsers = cache(async ({
    query,
    filters={},
    page = 1,
    perPage = 100,
  }: UserSearchOptions): Promise<UserSearchResult > => {
 
  const searchQuery = buildUserSearchQuery(query, filters);
  const response = await fetch(
    `${BASE_URL}/search/users?q=${encodeURIComponent(searchQuery)}&page=${page}&per_page=${perPage}`,
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
    filters?: RepositorySearchFilters;
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
    async ({query, filters={}, sort,order, page, perPage}: RepositorySearchOptions): Promise<RepositorySearchResult> => {  
        const searchQuery = buildRepositorySearchQuery(query, filters);
        const response = await fetch(
          `${BASE_URL}/search/repositories?q=${encodeURIComponent(searchQuery)}&sort=${encodeURIComponent(sort ?? "")}&order=${encodeURIComponent(order ?? "")}&page=${page ?? 1}&per_page=${perPage ?? 100}`,
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

type ContributionSearchOptions = {
  query: string;
  filters?: ContributionSearchFilters;
  page?: number;
  perPage?: number;
};

type ContributionSearchResult = {
  total: number;
  issues: GitHubIssue[];
};

export const searchContributions=cache(
    async ({query, filters={}, page, perPage}: ContributionSearchOptions): Promise<ContributionSearchResult> => {
        const contributionFilters: ContributionSearchFilters= {
          state: "open",
          ...filters
        }
        const searchQuery = buildContributionSearchQuery(query, contributionFilters);
        const response = await fetch(
          `${BASE_URL}/search/issues?q=${encodeURIComponent(searchQuery)}&page=${page ?? 1}&per_page=${perPage ?? 100}`,
          {
            cache: "no-store",
          }
        );

        // if (!response.ok) {
        //   throw new Error("Failed to fetch issues.");
        // } 
        if (!response.ok) {
        const error = await response.text();
        console.log("GitHub error:", response.status, error);

        throw new Error("Failed to fetch issues.");
    }

        const json = await response.json();

        // Validate 
        const data = z.object({
            total_count: z.number(),
            items: z.array(GitHubIssueSchema)
        }).parse(json);

      // Transform
        return {
            total: data.total_count,
            issues: data.items.map(mapGitHubIssue)
        };
    }
  )