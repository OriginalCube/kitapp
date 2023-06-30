import React from "react";
import Post from "../components/profile/Post";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = (props: any) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetaisl] = React.useState({});

  const AuthCheck = async () => {
    try {
      const Auth = await axios.get("/api/v1/profile/details", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      if (Auth) {
        props.setAuth(localStorage.getItem("kitappToken"));
        setUserDetaisl(Auth.data);
        props.setUserDetails(Auth.data);
      }
    } catch (err) {
      console.log(err);
      console.log("account does not exist.");
      navigate("/accounts");
    }
  };

  React.useEffect(() => {
    AuthCheck();
  }, []);
  return (
    <div className="w-full h-auto flex">
      <div className="w-4/5 h-auto ">
        <Post userDetails={userDetails} />
      </div>
      <div className="w-1/5 h-auto"></div>
    </div>
  );
};

export default Profile;
