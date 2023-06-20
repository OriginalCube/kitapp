import React from "react";

const UserHeader = (props: any) => {
  const [following, setFollowing] = React.useState(false);
  return (
    <div className="w-full h-20 flex shadow rounded-xl bg-white ">
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
      <div className="w-1/2 h-full flex">
        <div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
