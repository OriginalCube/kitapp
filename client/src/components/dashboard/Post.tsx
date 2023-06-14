import React from "react";
import { TextField } from "./TextField";
import Feed from "./Feed";
import axios, { AxiosResponse } from "axios";

const Post = (props: any) => {
  const [post, setPost] = React.useState<AxiosResponse | null | void>(null);

  const api_url = "/api/v1/posts/";
  const getPost = async () => {
    try {
      const postData = await axios.get(api_url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      setPost(postData.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="h-auto w-5/6 m-auto ">
      <TextField picture={props.userDetails.picture} />
      <div className="w-full h-auto bg-white relative top-40 rounded-xl shadow-xl">
        <Feed userDetails={props.userDetails} post={post} />
      </div>
    </div>
  );
};

export default Post;
