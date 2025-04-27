import { useState } from "react";
import { useNavigate } from "react-router";

import Input from "./ui/Input";
import Button from "./ui/Button";
import H2 from "./ui/Typography";

import { useAuth } from "../hooks/useAuth";

const SignIn = () => {
  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });

  const { loading, handleSignIn } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSignIn(signInState);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeSignInValues = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setSignInState({
      ...signInState,
      [name]: value,
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center">
        <H2>Sign In</H2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Sign in to your account
        </p>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleOnChangeSignInValues}
              value={signInState.email}
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleOnChangeSignInValues}
              value={signInState.password}
            />
          </div>
          <Button loading={loading}>Sign In</Button>
        </form>
        <div className="text-center mt-2">
          <span className="text-gray-500 text-sm">Don't have an account? </span>
          <span
            onClick={() => navigate("/")}
            className="text-blue-500 cursor-pointer hover:underline text-sm font-medium"
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
