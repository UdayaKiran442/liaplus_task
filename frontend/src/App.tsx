import { Routes, Route } from "react-router";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import AddBlog from "./pages/AddBlog";
import Home from "./pages/Home";

import { setUser } from "./redux/userReducer";
import { getUserProfileAPI } from "./api/auth";

function App() {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const setUserProfile = useCallback(async () => {
    try {
      const getUserProfile = await getUserProfileAPI();
      if (
        getUserProfile.message === "User profile fetched successfully" &&
        getUserProfile.user
      ) {
        dispatch(setUser(getUserProfile.user));
      } else {
        dispatch(setUser(null));
      }
    } catch (error) {
      dispatch(setUser(null));
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      setUserProfile();
    } else {
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/add-blog"
          element={user?.role === "admin" ? <AddBlog /> : <Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
