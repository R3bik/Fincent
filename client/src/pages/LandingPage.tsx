import React from "react";
import hero from "../assets/hero.jpg";

const LandingPage = () => {
  return (
    <div>
      <div>
        {/* landing page navbar */}

        {/* hero section */}
        <div className="flex flex-col pt-[300px] items-center justify-center h-screen bg-gray-100">
          <h1 className="text-6xl font-bold text-center mb-4">
            Welcome to <span className="text-pblue">Fincent</span>
          </h1>
          <p className="text-3xl text-center mb-8">
            Your one-stop solution for all your financial needs.
          </p>

          <img src={hero} alt="" className=" w-[800px] pt-10" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
