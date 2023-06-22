import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserHeader = (props: any) => {
  const [follower, setFollower] = React.useState(false);
  const api_url = "/api/v1";
  const token = localStorage.getItem("kitappToken");

  const onFollow = async () => {
    console.log("will follw");
    const following = await axios.get(
      `${api_url}/follow/following/${props.id}`,
      { headers: { authorization: `Bearer ${token}` } }
    );

    console.log(following);
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
             ${
               follower
                 ? "hover:text-red-500 text-blue-500"
                 : "hover:text-blue-500 text-black"
             }`}
            >
              {follower ? "Follower" : "Follow"}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default UserHeader;
