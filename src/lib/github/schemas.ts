import { z } from "zod";

export const GitHubUserSchema = z.object({
  login: z.string(),
  avatar_url: z.string().url(),
  html_url: z.string().url(),
});

export const GitHubSearchSchema = z.object({
  total_count: z.number(),
  items: z.array(GitHubUserSchema),
});

export const GitHubUserDetailsSchema=z.object({
  login: z.string(),
  name:z.string().nullable(),
  avatar_url: z.string(),
  bio: z.string().nullable(),
  followers: z.number(),
  following: z.number(),
  public_repos: z.number(),
  location: z.string().nullable(),
  company: z.string().nullable(),
  blog:z.string()

})

export const GitHubRepoSchema=z.object({
  id:z.number(),
  name:z.string(),
  owner: z.object
    ({
      login:z.string()
    }),
  homepage:z.string().nullable(),
  license:
  z.object({
    name:z.string()
  }).nullable(),
  description:z.string().nullable(),
  stargazers_count:z.number(),
  language:z.string().nullable(),
  html_url:z.string().url(),
  forks_count:z.number(),
  open_issues_count: z.number(),
  default_branch: z.string(),
  visibility: z.enum(["public","private"]),
  created_at:z.string(),
  updated_at:z.string(),
  topics: z.array(z.string()).optional().default([]),
  parent:z.object({
    full_name:z.string()
  }).nullable().optional(),
  pushed_at:z.string(),
  archived:z.boolean(),
  fork:z.boolean(),
    
})

export const GitHubIssueSchema = z.object({
  id: z.number(),
  number: z.number(),
  title: z.string(),
  html_url: z.string().url(),

  state: z.enum(["open", "closed"]),

  user: z.object({
    login: z.string(),
    avatar_url: z.string().url(),
  }),

  labels: z.array(
    z.object({
      name: z.string(),
    })
  ),

  comments: z.number(),

  created_at: z.string(),
  updated_at: z.string(),

  repository_url: z.string().url(),
});



export type GitHubApiRepo=z.infer<typeof GitHubRepoSchema>
export type GitHubApiUser = z.infer<typeof GitHubUserSchema>;
export type GitHubApiSearch = z.infer<typeof GitHubSearchSchema>;
export type GitHubApiUserDetails = z.infer<typeof GitHubUserDetailsSchema>;
export type GitHubApiIssue = z.infer<typeof GitHubIssueSchema>;