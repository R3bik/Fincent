import React from "react";
import CustomPieChart from "../../Charts/CustomPieChart";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

const FinanceOverview = () => {
  const balanceData = [
    { name: "Total Income", value: 4000 },
    { name: "Total Expenses", value: 2000 },
    { name: "Total Balance", value: 1000 },
  ];

  // Calculate total amount
  const totalAmount = balanceData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="card w-1/2">
      <div className="flex flex-col  p-2">
        <div className="">
          <CustomPieChart
            data={balanceData}
            label="Finance Breakdown"
            totalAmount={totalAmount}
            colors={colors}
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceOverview;
