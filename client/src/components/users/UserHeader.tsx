import React from "react";
import axios from "axios";

const UserHeader = (props: any) => {
  const [follower, setFollower] = React.useState("true");
  const api_url = "/api/v1";
  const token = localStorage.getItem("kitappToken");

  const onFollow = async () => {
    const following = await axios.get(
      `${api_url}/follow/following/${props.id}`,
      { headers: { authorization: `Bearer ${token}` } }
    );
    setFollower(following.data.message === "following" ? "true" : "false");
  };

  return (
    <div className="w-full h-20 flex shadow rounded-xl bg-white ">
      {props.userDetail ? (
        <>
          <div className="w-24 h-full flex items-center justify-center">
            <img
              className="h-1/2 w-auto rounded-full"
              src={`./assets/profile/${props.userDetail.picture}.webp`}
              alt=""
            />
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <p className="text-xl text-left w-full font-bold">
              {props.userDetail.username}
            </p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <p
              onClick={onFollow}
              className={`w-5/6 text-right text-xl font-bold cursor-pointer
             text-blue-500 hover:text-amber-500`}
            >
              {props.userDetail.following}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default UserHeader;
