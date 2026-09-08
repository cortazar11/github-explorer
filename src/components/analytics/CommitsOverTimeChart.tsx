
"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";

type CommitsPerDayData = {
  date: string;
  commits: number;
};

type CommitsOverTimeChartsProps = {
  data: CommitsPerDayData[];
};

export default function CommitsOverTimeCharts({
  data,
}: CommitsOverTimeChartsProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart
        data={data}
        margin={{
          bottom: isMobile ? 50 : 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="date"
          angle={-45}
          textAnchor="end"
          dy={3}
          height={isMobile ? 70 : 50}
          interval={isMobile ? Math.ceil(data.length / 5) - 1 : "preserveStartEnd"}
        />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="commits"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
             



