import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import axios from "axios";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";

function App() {
  const [auth, setAuth] = React.useState("");

  React.useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div className="w-full h-auto flex">
      <BrowserRouter>
        {auth.length !== 0 ? <Navigation /> : null}
        <div className="relative w-full h-auto z-10">
          <div className="w-full h-auto">
            <Routes>
              <Route path="/accounts" element={<Login />} />
              <Route index element={<Main setAuth={setAuth} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
