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

type CommitAreasData = {
  area: string;
  commits: number;
};

type CommitAreasChartProps = {
  data: CommitAreasData[];
};

export default function CommitAreasChart({ data }: CommitAreasChartProps) {
    console.log("Commit areas data:", data);
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart layout="vertical" data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="area" width={120}  />
        <Tooltip />
        <Bar  dataKey="commits" />
      </BarChart>
    </ResponsiveContainer>
  );
}
