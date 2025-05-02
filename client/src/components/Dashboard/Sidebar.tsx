import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaMoneyBillWave,
  FaWallet,
  FaUser,
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { icon: <FaTachometerAlt />, label: "Dashboard" },
    { icon: <FaMoneyBillWave />, label: "Income" },
    { icon: <FaWallet />, label: "Expenses" },
    { icon: <FaArrowTrendUp />, label: "Prediction" },
    { icon: <FaUser />, label: "Profile" },
  ];

  return (
    <div className="flex flex-col pl-4 pt-10 h-full">
      <ul className="space-y-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveItem(item.label)}
            className={`flex items-center space-x-4 cursor-pointer rounded-lg p-4 text-xl transition-all duration-200 ease-in-out ${
              activeItem === item.label
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {item.icon}
            <span className="text-xl">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
