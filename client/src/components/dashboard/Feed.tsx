import React from "react";
import PostFormat from "./PostFormat";

const Feed = (props: any) => {
  console.log(props.post);
  return (
    <div className="w-full h-auto p-2 flex-col items-center justify-center">
      {props.post.length === 0 ? (
        <PostFormat
          image={"admin.jpeg"}
          username={"Admin"}
          feed={
            "Welcome to our vibrant social media community, where connections are forged, voices are amplified, and stories come alive. Join us and share your experiences, engage with like-minded individuals, and create lasting digital connections."
          }
          _id={"#Admin"}
        />
      ) : (
        props.post.map((e: any, index: number) => (
          <PostFormat
            image={"admin.jpeg"}
            username={"admin"}
            feed={e.kita}
            key={index}
          />
        ))
      )}
    </div>
  );
};

export default Feed;
