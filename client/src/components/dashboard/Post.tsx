import React from "react";
import { TextField } from "./TextField";
import Feed from "./Feed";

const Post = () => {
  return (
    <div className="h-auto w-5/6 m-auto">
      <TextField />
      <Feed />
    </div>
  );
};

export default Post;
