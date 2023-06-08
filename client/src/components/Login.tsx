import React from "react";

const Login = () => {
  return (
    <div className="h-screen flex w-auto bg-gray-200 justify-center items-center">
      <div className="h-4/6 w-2/4 border-4 p-2 bg-white rounded-md border-white shadow-md">
        <div className="h-full w-full flex items-center justify-center">
          <div className="h-full w-1/3 bg-blue-700 rounded-md flex-col justify-center">
            <div className="w-5/6 h-1/3 m-auto flex-col">
              <p className="text-4xl font-bold">Welcome to KitaApp</p>
              <p className="text-xl font-light opacity-80">
                Start kita! with other people.
              </p>
            </div>
          </div>
          <div className="h-full w-2/3 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
