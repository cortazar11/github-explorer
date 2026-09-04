import { getCommitsPerDayAnalysis, getWeekdayAnalysis, getCommitAreasAnalysis, getTopContributorsAnalysis, getHumanVsBotAnalysis } from "@/lib/analytics/api";
import WeekdayChart from "@/components/analytics/weekdayChart";
import CommitsOverTimeChart from "@/components/analytics/CommitsOverTimeChart";
import CommitAreasChart from "@/components/analytics/CommitAreasChart";
import CommitTopContributorsChart from "@/components/analytics/CommitTopContributorsChart";
import HumanVsBotChart from "@/components/analytics/HumanVsBotChart";
import Link from "next/link";

export default async function AnalyticsPage() {
  const weekdayAnalysis = await getWeekdayAnalysis();
  const commitsPerDayAnalysis = await getCommitsPerDayAnalysis();
  const commitAreasData = await getCommitAreasAnalysis();
  const topContributorsData = await getTopContributorsAnalysis();
  const humanVsBotAnalysis = await getHumanVsBotAnalysis();

  const humanVsBotData = [
  {
    name: "Human",
    value: humanVsBotAnalysis.human_commits,
  },
  {
    name: "Bot",
    value: humanVsBotAnalysis.bot_commits,
  },
];

  const weekdayData = Object.entries(weekdayAnalysis).map(
    ([day, commits]) => ({
      day,
      commits,
    })
  );

  const commitsPerDayData = Object.entries(commitsPerDayAnalysis).map(
    ([date, commits]) => ({
      date,
      commits,
    })
  );



  return (
  <main className="min-h-screen bg-gray-50 p-8">

      <Link
        href="/"
        className="inline-block mb-6 text-black-600 hover:underline"
      >
    ← Back to GitHub Explorer
  </Link>
    <h1 className="text-3xl font-bold mb-8">
      GitHub Analytics
    </h1>
    <h2 className="text-2xl  mb-4">
      GitHub commit activity and contributor insights from the Next.js repository.
    </h2>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">
          Commits by weekday
        </h2>
        <WeekdayChart data={weekdayData} />
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">
          Commits Over Time
        </h2>
        <CommitsOverTimeChart data={commitsPerDayData} />
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">
          Commits by areas
        </h2>
        <CommitAreasChart data={commitAreasData} />
      </div>

      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">
          Top Contributors
        </h2>
        <CommitTopContributorsChart data={topContributorsData} />
      </div>

      <div className="rounded-xl bg-white p-6 shadow ">
        <h2 className="text-xl font-semibold mb-4">
          Human vs Bot
        </h2>
        <HumanVsBotChart data={humanVsBotData} />
      </div>
    </section>
  </main>
);
}

