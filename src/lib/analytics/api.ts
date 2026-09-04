const API_URL = "http://127.0.0.1:8000";

type WeekdayAnalysis = {
  [day: string]: number;
};

export async function getWeekdayAnalysis(): Promise<WeekdayAnalysis> {
  const response = await fetch(`${API_URL}/analytics/weekday`);

  if (!response.ok) {
    throw new Error("Failed to fetch weekday analysis");
  }

  return response.json();
}

type CommitsPerDayAnalysis = {
  [date: string]: number;
};

export async function getCommitsPerDayAnalysis(): Promise<CommitsPerDayAnalysis> {
  const response = await fetch(`${API_URL}/analytics/commits-per-day`);

  if (!response.ok) {
    throw new Error("Failed to fetch commits per day analysis");
  }

  return response.json();
}

type CommitAreasAnalysis = {
  area: string;
  commits: number;
}[];

export async function getCommitAreasAnalysis(): Promise<CommitAreasAnalysis> {
  const response = await fetch(`${API_URL}/analytics/areas`);

  if (!response.ok) {
    throw new Error("Failed to fetch commit areas analysis");
  }

  return response.json();
}

type TopContributor = {
  author: string;
  commits: number;
};

export async function getTopContributorsAnalysis(): Promise<TopContributor[]> {
  const response = await fetch(`${API_URL}/analytics/contributors`);

  if (!response.ok) {
    throw new Error("Failed to fetch top contributors analysis");
  }

  return response.json();
}

type HumanVsBotAnalysis = {
  human_commits: number;
  human_contributors: number;
  bot_commits: number;
  bot_percentage: number;
};

export async function getHumanVsBotAnalysis(): Promise<HumanVsBotAnalysis> {
  const response = await fetch(`${API_URL}/analytics/human-vs-bot`);

  if (!response.ok) {
    throw new Error("Failed to fetch human vs bot analysis");
  }

  return response.json();
}