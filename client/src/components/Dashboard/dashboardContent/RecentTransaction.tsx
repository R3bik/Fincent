import React from "react";
import Transaction from "../../../utility/Transaction";

const RecentTransaction = () => {
  return (
    <div className="card w-1/2">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h5 className="text-xl ">Recent Transaction</h5>
          <button className="btn-primary">See more</button>
        </div>
        {/* transaction info */}
        <div className="p-4 ">
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
