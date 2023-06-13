import React from "react";

const PostFormat = (props: any) => {
  return (
    <div className="h-auto w-full flex items-center justify-center">
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
        <p className="text-xl font-light opacity-80">{props.feed}</p>
      </div>
    </div>
  );
};

export default PostFormat;
