"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type WeekdayData = {
  day: string;
  commits: number;
};

type WeekdayChartProps = {
  data: WeekdayData[];
};

export default function WeekdayChart({ data }: WeekdayChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="commits" />
      </BarChart>
    </ResponsiveContainer>
  );
}