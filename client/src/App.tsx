import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import axios from "axios";

function App() {
  const [auth, setAuth] = React.useState("");

  React.useEffect(() => {
    axios
      .post("/api/v1/profile/create", { username: "lance", password: "lmao" })
      .then((e) => console.log(e));
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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
