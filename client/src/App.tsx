import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Accounts/Login";
import axios from "axios";
import Main from "./components/Main";

function App() {
  const [auth, setAuth] = React.useState("");

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

  return (
    <div className="w-full h-auto">
      {auth.length !== 0 ? (
        <div className="w-full" style={{ height: "10vh" }}></div>
      ) : null}
      <div className="w-full h-auto">
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/dashboard" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
