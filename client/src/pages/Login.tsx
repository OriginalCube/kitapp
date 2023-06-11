import React from "react";
import LoginComponent from "../components/Accounts/LoginFormat";
import Register from "../components/Accounts/RegisterFormat";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const api_url = "/api/v1/profile/";
  const [hasAccount, setHasAccount] = React.useState(true);
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = React.useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    number: "",
    birthday: "",
  });

  const [loginInput, setLoginInput] = React.useState({
    username: "",
    password: "",
  });

  const onChangeRegister = (e: any, ev: string) => {
    setRegisterInput({ ...registerInput, [ev]: e.target.value });
  };

  const onChangeLogin = (e: any, ev: string) => {
    setLoginInput({ ...loginInput, [ev]: e.target.value });
  };

  const onSubmit = async (e: string) => {
    if (e === "login") {
      const onLogin = await axios.post(api_url + "login", loginInput);
      try {
        localStorage.setItem("kitappToken", onLogin.data.token);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    } else if (e === "register") {
      const onRegister = await axios.post(api_url + "create", registerInput);
      try {
        console.log(onRegister);
        // localStorage.setItem("usappToken", onRegister.data.token);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-screen flex w-auto bg-gray-200 justify-center items-center">
      <div className="h-4/6 w-2/4 border-4 p-2 bg-white rounded-md border-white shadow-xl">
        <div className="h-full w-full flex items-center justify-center">
          <div className="h-full w-1/3 bg-blue-700 rounded-md flex-col justify-center">
            <div className="w-5/6 h-1/3 m-auto flex-col">
              <p
                onClick={() => setHasAccount(!hasAccount)}
                className="text-4xl font-bold text-white"
              >
                Welcome to KitaApp
              </p>
              <p className="text-xl font-light opacity-80 text-white">
                Start kita! with other people.
              </p>
            </div>
          </div>
          <div className="h-full w-2/3 bg-white flex items-center justify-center">
            <div className="h-5/6 w-full">
              {hasAccount ? (
                <LoginComponent
                  onSubmit={onSubmit}
                  loginInput={loginInput}
                  onChangeLogin={onChangeLogin}
                />
              ) : (
                <Register
                  onSubmit={onSubmit}
                  registerInput={registerInput}
                  onChangeRegister={onChangeRegister}
                />
              )}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
