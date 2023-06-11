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
      {auth.length !== 0 ? <Navigation /> : null}
      <div className="relative w-full h-auto">
        <div className="w-full h-auto">
          <BrowserRouter>
            <Routes>
              <Route path="/accounts" element={<Login />} />
              <Route index element={<Main setAuth={setAuth} />} />
            </Routes>
          </BrowserRouter>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
