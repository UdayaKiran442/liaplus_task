import { Routes, Route } from "react-router";
import { useEffect } from "react";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      // isAuthenticated = true;
    }
  },[token])
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
