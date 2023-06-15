import React from "react";
import TextField from "./TextField";

const SearchBody = (props: any) => {
  return (
    <div className="w-5/6 h-auto m-auto">
      <TextField picture={props.userDetails.picture} />
      <div className="w-full h-auto bg-white relative top-40 rounded-xl shadow-xl"></div>
    </div>
  );
};

export default SearchBody;
