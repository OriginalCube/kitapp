import React from "react";
import PostFormat from "./PostFormat";

const Feed = () => {
  const [feed, setFeed] = React.useState([]);
  return (
    <div className="bg-white w-full h-auto p-2 relative top-40 rounded-xl shadow-xl">
      {feed.length === 0 ? (
        <PostFormat
          image={"admin.jpeg"}
          username={"Admin"}
          feed={
            "Welcome to our vibrant social media community, where connections are forged, voices are amplified, and stories come alive. Join us and share your experiences, engage with like-minded individuals, and create lasting digital connections."
          }
        />
      ) : null}
    </div>
  );
};

export default Feed;