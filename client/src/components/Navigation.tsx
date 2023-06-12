import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-1/5 h-auto bg-gray-200 z-50">
      <div className="h-screen w-1/5 flex bg-white flex-col shadow-xl fixed">
        <div className="h-16 w-5/6 mt-10 mx-auto flex items-center">
          <p className="text-4xl text-center w-full opacity-80">KitApp</p>
        </div>
        <div className="h-48 w-5/6 mt-10 mx-auto flex-col items-center justify-center">
          <p className="font-bold opacity-80 text-sm">Navigation</p>
          <div className="w-full h-full flex-col">
            <Link to={"/"}>
              <div className="h-1/4 w-5/6 flex m-auto items-center cursor-pointer">
                <img
                  className="h-2/4 w-auto opacity-80"
                  src="./assets/icons/home.png"
                  alt=""
                />
                <p className="text-2xl w-full text-center font-light opacity-80 p-2">
                  Home
                </p>
              </div>
            </Link>
            <Link to={"/search"}>
              <div className="h-1/4 w-5/6 flex m-auto items-center cursor-pointer">
                <img
                  className="h-2/4 w-auto opacity-80"
                  src="./assets/icons/search.png"
                  alt=""
                />
                <p className="w-full text-2xl text-center font-light opacity-80 p-2">
                  Search
                </p>
              </div>
            </Link>
            <Link to={"/profile"}>
              <div className="h-1/4 w-5/6 flex m-auto items-center cursor-pointer">
                <img
                  className="h-2/4 w-auto opacity-80"
                  src="./assets/icons/search.png"
                  alt=""
                />
                <p className="w-full text-2xl text-center font-light opacity-80 p-2">
                  Profile
                </p>
              </div>
            </Link>
            <Link to={"/report"}>
              <div className="h-1/4 w-5/6 flex m-auto items-center cursor-pointer">
                <img
                  className="h-2/4 w-auto opacity-80"
                  src="./assets/icons/report.png"
                  alt=""
                />
                <p className="w-full text-xl text-center font-light opacity-80 p-2">
                  Report Bugs
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
