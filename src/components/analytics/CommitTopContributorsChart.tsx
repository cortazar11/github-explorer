'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TopContributorsData = {
  author: string;
  commits: number;
};

type TopContributorsChartProps = {
  data: TopContributorsData[];
};

export default function TopContributorsChart({ data }: TopContributorsChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart layout="vertical" data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="author" width={120} />
        <Tooltip />
        <Bar dataKey="commits" />
      </BarChart>
    </ResponsiveContainer>
  );
}
