import { Routes, Route } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import Home from "./pages/Home";

import { setUser } from "./redux/userReducer";
import { getUserProfileAPI } from "./api/auth";

function App() {
  const token = localStorage.getItem("token");
  const { isAuthenticated } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const setUserProfile = async () => {
    try {
      const getUserProfile = await getUserProfileAPI();
      dispatch(setUser(getUserProfile.user));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) {
      setUserProfile();
    }
  }, [token]);
  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
