import React from "react";

const Transaction = ({ title, icon, date, amount, type }) => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 ">
        <div className="flex items-center gap-4">
          <div className={`border rounded-full text-2xl p-2 `}>{icon}</div>
          <div>
            <p className="">{title}</p>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
        </div>
        <div className="flex items-center border border-gray-200 p-2 gap-2 text-sm">
          <p className="text-sm">{amount}</p>
          <p>{type}</p>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
