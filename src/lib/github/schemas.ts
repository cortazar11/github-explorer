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
export type GitHubApiUser = z.infer<typeof GitHubUserSchema>;
export type GitHubApiSearch = z.infer<typeof GitHubSearchSchema>;
export type GitHubApiUserDetails = z.infer<typeof GitHubUserDetailsSchema>;