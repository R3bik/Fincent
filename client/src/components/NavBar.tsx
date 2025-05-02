import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";

const NavBar = () => {
  const { user } = useUser();
  return (
    <div className="">
      <div className="bg-white px-6 py-4 flex justify-between items-center border-b border-gray-200 shadow-md">
        <h1 className="text-2xl ">FINCENT</h1>
        {user ? (
          <div className="flex gap-4 items-center">
            <span>
              <UserButton />
            </span>
          </div>
        ) : (
          <div>
            <button className="btn-primary">
              {" "}
              <SignInButton />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
