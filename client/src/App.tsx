import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Accounts/Login";
import axios from "axios";
import Main from "./components/Main";

function App() {
  const [auth, setAuth] = React.useState("");

  return (
    <div className="w-full h-auto">
      {auth.length !== 0 ? (
        <div className="w-full" style={{ height: "10vh" }}></div>
      ) : null}
      <div className="w-full h-auto">
        <BrowserRouter>
          <Routes>
            <Route path="/accounts" element={<Login />} />
            <Route index element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
