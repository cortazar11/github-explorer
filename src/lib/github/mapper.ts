import type { GitHubApiUser,GitHubApiUserDetails, GitHubApiRepo,GitHubApiIssue } from "./schemas";
import type { GitHubUser, GitHubUserDetails, GitHubRepo, GitHubIssue } from "./types";

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

  export function mapGitHubRepo(repo: GitHubApiRepo): GitHubRepo {
    return {
      id: repo.id,
      name: repo.name,
      owner:repo.owner.login,
      homepage: repo.homepage ?? undefined,
      license: repo.license?.name ?? undefined,
      description: repo.description ?? undefined,
      stargazersCount: repo.stargazers_count,
      language: repo.language ?? undefined,
      repoUrl: repo.html_url,
      forksCount: repo.forks_count,
      openIssuesCount:repo.open_issues_count,
      defaultBranch: repo.default_branch,
      visibility: repo.visibility,
      createdAt: repo.created_at,
      updatedAt: repo.updated_at,
      topics: repo.topics ?? [],
      parent: repo.parent?.full_name ?? undefined,
      pushedAt: repo.pushed_at,
      archived: repo.archived,
      fork: repo.fork
    };  
}

export function mapGitHubIssue(issue: GitHubApiIssue): GitHubIssue {
  return {
    id: issue.id,
    number: issue.number,
    title: issue.title, 
    issueUrl: issue.html_url,  
    state: issue.state,
    user: {
      username: issue.user.login,  
      avatarUrl: issue.user.avatar_url,
    },
    labels: issue.labels,
    comments: issue.comments,
    createdAt: issue.created_at,
    updatedAt: issue.updated_at,
    repositoryUrl: issue.repository_url,
    repositoryHtmlUrl: issue.repository_url.replace(
      "https://api.github.com/repos/",
      "https://github.com/"
    )
  };
} 
