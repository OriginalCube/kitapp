import React from "react";

export const TextField = () => {
  return (
    <div className="relative top-24 w-full h-20 bg-white rounded-full shadow flex items-center justify-center">
      <input
        type="text"
        className="h-4/6 rounded-full outline-none border-2 border-gray-300 p-4"
        style={{ width: "95%" }}
      />
    </div>
  );
};
