// 'use client'

// import {
//   Bar,
//   BarChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// type TopContributorsData = {
//   author: string;
//   commits: number;
// };

// type TopContributorsChartProps = {
//   data: TopContributorsData[];
// };

// export default function TopContributorsChart({ data }: TopContributorsChartProps) {
//   return (
//     <ResponsiveContainer width="100%" height={350}>
//       <BarChart layout="vertical" data={data}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis type="number" />
//         <YAxis type="category" dataKey="author" width={120} />
//         <Tooltip />
//         <Bar dataKey="commits" />
//       </BarChart>
//     </ResponsiveContainer>
//   );
// }

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

type TopContributorsData = {
  author: string;
  commits: number;
};

type TopContributorsChartProps = {
  data: TopContributorsData[];
};

export default function CommitTopContributorsChart({
  data,
}: TopContributorsChartProps) {
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
          dataKey="author"
          width={isMobile ? 85 : 120}
          tick={{ fontSize: isMobile ? 10 : 12 }}
        />

        <Tooltip />

        <Bar dataKey="commits" />
      </BarChart>
    </ResponsiveContainer>
  );
}