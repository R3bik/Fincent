import React from "react";
import {
  FaTachometerAlt,
  FaMoneyBillWave,
  FaWallet,
  FaUser,
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: <FaTachometerAlt />, label: "Dashboard", path: "/dashboard" },
  { icon: <FaMoneyBillWave />, label: "Income", path: "/dashboard/income" },
  { icon: <FaWallet />, label: "Expenses", path: "/dashboard/expenses" },
  {
    icon: <FaArrowTrendUp />,
    label: "Prediction",
    path: "/dashboard/prediction",
  },
  { icon: <FaUser />, label: "Profile", path: "/dashboard/profile" },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col pl-4 pt-10 h-full">
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center space-x-4 rounded-lg p-4 text-xl transition-all duration-200 ease-in-out ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
