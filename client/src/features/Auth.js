import axios from "axios";

const AuthCheck = async () => {
  const Auth = await axios.get("/api/v1/profile/details", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("kitappToken")}`,
    },
  });

  if (Auth) {
    return true;
  } else {
    return false;
  }
};

const AuthService = {
  AuthCheck,
};

export default AuthService;
