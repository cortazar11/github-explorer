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
import { useEffect, useState } from "react";

type WeekdayData = {
  day: string;
  commits: number;
};

type WeekdayChartProps = {
  data: WeekdayData[];
};

export default function WeekdayChart({ data }: WeekdayChartProps) {
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
      <BarChart
        data={data}
        margin={{
          bottom: isMobile ? 25 : 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="day"
          interval={isMobile ? 0 : "preserveStartEnd"}
          angle={isMobile ? -35 : 0}
          textAnchor={isMobile ? "end" : "middle"}
          height={isMobile ? 60 : 30}
        />

        <YAxis />

        <Tooltip />

        <Bar dataKey="commits" />
      </BarChart>
    </ResponsiveContainer>
  );
}