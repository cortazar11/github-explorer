'use client'


import {
    Legend,
    Pie,
    PieChart,
   PieSectorShapeProps,
   ResponsiveContainer,
   Sector,
   Tooltip,            
   } from "recharts";

type HumanVsBotData = {
     name: string;
    value: number;
};

type HumanVsBotChartProps = {
    data: HumanVsBotData[];
};

const COLORS = ["#3b82f6", "#f97316"];

    

const myCustomPie = (props: PieSectorShapeProps) => {
  const { index, ...sectorProps } = props;

  return (
    <Sector
      {...sectorProps}
      fill={COLORS[index ?? 0]}
    />
  );
};

export default function HumanVsBotChart({ data }: HumanVsBotChartProps) {
    return (    
        <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={120}
                    label
                    shape={myCustomPie}
                />
                <Legend
                    formatter={(value) => (
                        <span
                        style={{
                            color: value === "Human" ? "#3b82f6" : "#f97316",
                        }}
                        >
                        {value}
                        </span>
                    )}
                /> 
                <Tooltip />
              </PieChart>
        </ResponsiveContainer>
    )
}
