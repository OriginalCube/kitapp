import React from "react";
import axios from "axios";

const Main = () => {
  const AuthCheck = async () => {
    try {
      const Auth = await axios.get("/api/v1/profile/details", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      if (Auth) {
        console.log(Auth);
      } else {
        console.log("Navigation");
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    AuthCheck();
  }, []);
  return <div className="w-full h-full"></div>;
};

export default Main;
