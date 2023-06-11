import React from "react";

const Navigation = () => {
  return (
    <div className="w-2/6 h-screen">
      <div className="sticky w-full h-2/6 flex-col top-40 border-r-2 border-blue-400 pr-4">
        <div className="w-full h-1/5 flex items-baseline justify-end">
          <img
            src="./assets/icons/home.png"
            className="w-8 h-auto pr-2"
            alt=""
          />
          <p className="text-3xl font-bold w-1/3 text-center">Home</p>
        </div>
        <div className="w-full h-1/5 flex items-baseline justify-end">
          <img
            src="./assets/icons/search.png"
            className="w-8 h-auto pr-2"
            alt=""
          />
          <p className="text-3xl font-light w-1/3 text-center">Search</p>
        </div>
        <div className="w-full h-1/5 flex items-baseline justify-end">
          <img
            src="./assets/icons/home.png"
            className="w-8 h-auto pr-2"
            alt=""
          />
          <p className="text-3xl font-light w-1/3 text-center">Profile</p>
        </div>
        <div className="w-full h-1/5 flex items-baseline justify-end">
          <img
            src="./assets/icons/chat.png"
            className="w-8 h-auto pr-2"
            alt=""
          />
          <p className="text-3xl font-light w-1/3 text-center">Usapp</p>
        </div>
        <div className="w-full h-1/5 flex items-baseline justify-end">
          <img
            src="./assets/icons/report.png"
            className="w-8 h-auto pr-2"
            alt=""
          />
          <p className="text-3xl font-light w-1/3 text-center">Report Bugs</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
