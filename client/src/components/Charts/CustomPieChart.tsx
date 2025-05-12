import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomPieChart = ({
  data = [],
  label = "Pie Chart",
  totalAmount = 0,
  colors = [],
}) => {
  // Provide fallback colors if none given
  const defaultColors = ["#8884d8", "#82ca9d", "#ffc658"];
  const pieColors = colors.length ? colors : defaultColors;

  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No data to display.</p>;
  }

  return (
    <div className="flex  flex-col items-center">
      <h2 className="text-xl font-bold ">{label}</h2>

      <ResponsiveContainer width={500} height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={pieColors[index % pieColors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* <p className="mt-4 text-lg font-semibold">
        Total: ${totalAmount.toLocaleString()}
      </p> */}
    </div>
  );
};

export default CustomPieChart;
