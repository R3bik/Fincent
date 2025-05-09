import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full h-screen flex pt-16">
      {/* sidebar */}
      <div className="max-w-[300px] w-full px-6 py-4 h-screen fixed bg-white border-gray-200 border-r shadow-md">
        <Sidebar />
      </div>
      {/* dashboard content */}
      <div className="ml-[300px] w-full h-screen overflow-y-auto p-12">
        {/* Add your NavBar or other components here */}

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
