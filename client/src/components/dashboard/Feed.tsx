import React from "react";
import PostFormat from "./PostFormat";

const Feed = (props: any) => {
  return (
    <div className="w-full h-auto p-2 flex-col items-center justify-center mb-12">
      {props.post === null
        ? null
        : props.post.map((e: any, index: number) => (
            <PostFormat
              image={`${e.picture}.webp`}
              username={e.user}
              feed={e.kita}
              key={index}
              id={e.id}
              c_id={props.userDetails}
            />
          ))}
    </div>
  );
};

export default Feed;
