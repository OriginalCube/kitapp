import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Post from "../components/dashboard/Post";

const Main = (props: any) => {
  const navigate = useNavigate();

  const AuthCheck = async () => {
    try {
      const Auth = await axios.get("/api/v1/profile/details", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      if (Auth) {
        props.setAuth(localStorage.getItem("kitappToken"));
      }
    } catch (err) {
      console.log("account does not exist.");
      navigate("/accounts");
    }
  };

  React.useEffect(() => {
    AuthCheck();
  }, []);
  return (
    <div className="w-full h-screen flex bg-gray-200">
      <div className="w-4/5 h-auto">
        <Post />
      </div>
      <div className="w-1/5 h-auto"></div>
    </div>
  );
};

export default Main;
