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

type CommitAreasData = {
  area: string;
  commits: number;
};

type CommitAreasChartProps = {
  data: CommitAreasData[];
};

export default function CommitAreasChart({ data }: CommitAreasChartProps) {
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
        layout="vertical"
        data={data}
        margin={{
          right: isMobile ? 10 : 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis type="number" />

        <YAxis
          type="category"
          dataKey="area"
          width={isMobile ? 85 : 120}
          tick={{ fontSize: isMobile ? 10 : 12 }}
        />

        <Tooltip />

        <Bar dataKey="commits" />
      </BarChart>
    </ResponsiveContainer>
  );
}
