import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import axios from "axios";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";

function App() {
  const [auth, setAuth] = React.useState("");
  const [userDetails, setUserDetails] = React.useState({});

  return (
    <div className="w-full h-auto flex">
      <BrowserRouter>
        {auth.length !== 0 ? <Navigation userDetails={userDetails} /> : null}
        <div className="relative w-full h-auto z-10">
          <div className="w-full h-auto">
            <Routes>
              <Route
                path="/search"
                element={
                  <Search setUserDetails={setUserDetails} setAuth={setAuth} />
                }
              />
              <Route path="/accounts" element={<Login />} />
              <Route
                index
                element={
                  <Main setUserDetails={setUserDetails} setAuth={setAuth} />
                }
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
