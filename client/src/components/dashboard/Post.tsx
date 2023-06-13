import React from "react";
import { TextField } from "./TextField";
import Feed from "./Feed";

const Post = () => {
  return (
    <div className="h-auto w-5/6 m-auto">
      <TextField />
      <div className="w-full h-auto bg-white relative top-40 rounded-xl shadow-xl">
        <Feed />
      </div>
    </div>
  );
};

export default Post;
