import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const AuthCheck = async () => {
    try {
      const Auth = await axios.get("/api/v1/profile/details", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      if (Auth) {
        console.log(
          "User is logged in token " + localStorage.getItem("kitappToken")
        );
      }
    } catch (err) {
      console.log("account does not exist.");
      navigate("/accounts");
    }
  };

  React.useEffect(() => {
    AuthCheck();
  }, []);
  return <div className="w-full h-full"></div>;
};

export default Main;
