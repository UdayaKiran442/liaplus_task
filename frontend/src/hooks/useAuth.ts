import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

import { signInAPI, signUpAPI } from "../api/auth";

import { setUser } from "../redux/userReducer";
import { ISignUpAPIPayload } from "../types/types";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleSignUp = useCallback(async (payload: ISignUpAPIPayload) => {
    try {
      setLoading(true);

      const signUpAPIResponse = await signUpAPI(payload);

      if (signUpAPIResponse.message === "User registered successfully") {
        const signInAPIResponse = await signInAPI({
          email: payload.email,
          password: payload.password,
        });
        if (signInAPIResponse.message === "User logged in successfully") {
          localStorage.setItem("token", signInAPIResponse.token);
          dispatch(setUser(signInAPIResponse.user));
        }
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSignIn = useCallback(
    async (payload: { email: string; password: string }) => {
      try {
        setLoading(true);

        const signInAPIResponse = await signInAPI(payload);
        if (signInAPIResponse.message === "User logged in successfully") {
          localStorage.setItem("token", signInAPIResponse.token);
          dispatch(setUser(signInAPIResponse.user));
        }
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return {
    loading,
    handleSignUp,
    handleSignIn,
  };
};
