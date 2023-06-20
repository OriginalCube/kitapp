import React from "react";
import PostFormat from "./PostFormat";

const Feed = (props: any) => {
  return (
    <div className="w-full h-auto p-2 flex-col items-center justify-center mb-12">
      {props.post === null
        ? null
        : props.post.map((e: any, index: number) => (
            <PostFormat
              image={`${e.image}.webp`}
              username={e.username}
              feed={e.feed}
              key={index}
            />
          ))}
    </div>
  );
};

export default Feed;
