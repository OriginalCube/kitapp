import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostFormat = (props: any) => {
  return (
    <div className="h-full w-full flex-col items-center justify-center">
      <div className="w-full h-auto flex items-center justify-center border-b-2 border-gray-300">
        <div className="w-36 h-48 flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={`./assets/profile/${props.image}`}
              className="h-1/2 w-auto m-auto rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="w-full h-auto flex-col">
          <p className="text-2xl font-bold">
            {props.username}{" "}
            <span className="font-medium text-xl">{props._id} </span>
          </p>
          <p
            style={{ width: "90%" }}
            className="text-xl text-justify h-full font-light opacity-80 pb-8"
          >
            {props.feed}
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default PostFormat;
