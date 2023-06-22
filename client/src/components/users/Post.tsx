import React from "react";
import Feed from "./Feed";
import axios, { AxiosResponse } from "axios";
import UserHeader from "./UserHeader";

const Post = (props: any) => {
  const [post, setPost] = React.useState<AxiosResponse | null | void>(null);
  const [userDetail, setUserDetail] =
    React.useState<AxiosResponse | null | void>(null);
  const api_url = `/api/v1/`;

  const getPost = async () => {
    try {
      const postData = await axios.get(`${api_url}posts/${props.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      setPost(postData.data);
    } catch (err) {
      console.log(err);
    }

    try {
      const userData = await axios.get(`${api_url}profile/${props.id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      setUserDetail(userData.data);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="h-auto w-5/6 m-auto ">
      <div className="w-full h-auto relative top-24">
        <UserHeader userDetail={userDetail} id={props.id} />
      </div>
      <div className="w-full h-auto bg-white relative top-40 rounded-xl shadow-xl">
        <Feed userDetails={props.userDetails} post={post} />
      </div>
    </div>
  );
};

export default Post;
