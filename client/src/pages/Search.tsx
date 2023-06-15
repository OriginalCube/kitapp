import React from "react";
import TextField from "../components/search/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBody from "../components/search/SearchBody";

const Search = (props: any) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = React.useState({});
  const AuthCheck = async () => {
    try {
      const Auth = await axios.get("/api/v1/profile/details", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
        },
      });
      if (Auth) {
        props.setAuth(localStorage.getItem("kitappToken"));
        setUserDetails(Auth.data);
        props.setUserDetails(Auth.data);
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
    <div className="h-auto w-full flex">
      <div className="h-auto w-4/5">
        <SearchBody userDetails={userDetails} />
      </div>
      <div className="h-auto w-1/5"></div>
    </div>
  );
};

export default Search;
