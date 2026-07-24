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

export type GitHubApiUser = z.infer<typeof GitHubUserSchema>;
export type GitHubApiSearch = z.infer<typeof GitHubSearchSchema>;