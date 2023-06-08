import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

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
            <Route index element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
