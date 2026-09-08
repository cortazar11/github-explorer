// 'use client'


// import {
//     Legend,
//     Pie,
//     PieChart,
//    PieSectorShapeProps,
//    ResponsiveContainer,
//    Sector,
//    Tooltip,            
//    } from "recharts";

// type HumanVsBotData = {
//      name: string;
//     value: number;
// };

// type HumanVsBotChartProps = {
//     data: HumanVsBotData[];
// };

// const COLORS = ["#3b82f6", "#f97316"];

    

// const myCustomPie = (props: PieSectorShapeProps) => {
//   const { index, ...sectorProps } = props;

//   return (
//     <Sector
//       {...sectorProps}
//       fill={COLORS[index ?? 0]}
//     />
//   );
// };

// export default function HumanVsBotChart({ data }: HumanVsBotChartProps) {
//     return (    
//         <ResponsiveContainer width="100%" height={350}>
//               <PieChart>
//                 <Pie
//                     data={data}
//                     dataKey="value"
//                     nameKey="name"
//                     innerRadius={70}
//                     outerRadius={120}
//                     label
//                     shape={myCustomPie}
//                 />
//                 <Legend
//                     formatter={(value) => (
//                         <span
//                         style={{
//                             color: value === "Human" ? "#3b82f6" : "#f97316",
//                         }}
//                         >
//                         {value}
//                         </span>
//                     )}
//                 /> 
//                 <Tooltip />
//               </PieChart>
//         </ResponsiveContainer>
//     )
// }

"use client";

import {
  Legend,
  Pie,
  PieChart,
  PieSectorShapeProps,
  ResponsiveContainer,
  Sector,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

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

export default function HumanVsBotChart({
  data,
}: HumanVsBotChartProps) {
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
      <PieChart>
        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={isMobile ? 55 : 70}
            outerRadius={isMobile ? 90 : 120}
            label={false}
            shape={myCustomPie}
        />

        <Legend
                content={() => (
                    <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: isMobile ? "20px" : "30px",
                        marginTop: "10px",
                        fontSize: isMobile ? "13px" : "14px",
                    }}
                    >
                    {data.map((item, index) => (
                        <span
                        key={item.name}
                        style={{
                            color: COLORS[index],
                            whiteSpace: "nowrap",
                        }}
                        >
                        {item.name}: {item.value}
                        </span>
                    ))}
                    </div>
                )}
        />

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
