'use client'

import {
    Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type CommitsPerDayData = {
  date: string;
  commits: number;
};

type CommitsOverTimeChartsProps = {
  data: CommitsPerDayData[];
};

export default function CommitsOverTimeCharts({ data }: CommitsOverTimeChartsProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" /> 
            <XAxis 
               dataKey="date"
              angle={-45}
              textAnchor="end"
              dy={3}
              interval="preserveStartEnd"
            />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="commits" />
        </LineChart >
    </ResponsiveContainer>
  );
}

             



