import { FaWallet } from "react-icons/fa";
import InfoCard from "../../utility/InfoCard";
import { GiExpense } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import RecentTransaction from "./dashboardContent/RecentTransaction";
import FinanceOverview from "./dashboardContent/FinanceOverview";

const MainDashboard = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-4">
          <InfoCard
            icon={<FaWallet className="text-white " />}
            classNameIcon={"bg-blue-500 p-4"}
            title="Total Balance"
            value={2000}
          />
          <InfoCard
            icon={<FaMoneyBillTrendUp className="text-white " />}
            classNameIcon={"bg-green-500 p-4"}
            title="Total Income"
            value={2000}
          />
          <InfoCard
            icon={<GiExpense className="text-white " />}
            classNameIcon={"bg-red-500 p-4"}
            title="Total Expences"
            value={2000}
          />
        </div>
        {/* transaction details */}
        <div
          className="
          flex flex-col md:flex-row items-center gap-4"
        >
          <RecentTransaction />
          <FinanceOverview />
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
