import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/users/Post";
import axios from "axios";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const User = (props: any) => {
  const id = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!props.userDetails) {
      navigate("/accounts");
    }
  }, []);

  return (
    <div className="w-full h-auto flex">
      <div className="w-4/5 h-auto ">
        <Post userDetails={props.userDetails} id={id.id} />
      </div>
      <div className="w-1/5 h-auto"></div>
    </div>
  );
};

export default User;
