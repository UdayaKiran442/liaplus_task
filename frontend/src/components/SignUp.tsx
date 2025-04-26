import { useNavigate } from "react-router";
import { useState } from "react";

import Input from "./ui/Input";
import Button from "./ui/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [signUpState, setSignUpState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeSignUpValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpState({
      ...signUpState,
      [name]: value,
    });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(signUpState);
  };
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center">
        <p className="text-3xl font-extrabold text-gray-800 mb-1 text-center">
          Sign Up
        </p>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Create your account to get started
        </p>
        <form action="" className="w-full" onSubmit={handleSignUp}>
          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              onChange={onChangeSignUpValues}
              value={signUpState.name}
            />
          </div>
          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={onChangeSignUpValues}
              value={signUpState.email}
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={onChangeSignUpValues}
              value={signUpState.password}
            />
          </div>
          <Button>Sign Up</Button>
        </form>
        <div className="text-center mt-2">
          <span className="text-gray-500 text-sm">
            Already have an account?{" "}
          </span>
          <span
            onClick={() => navigate("/sign-in")}
            className="text-blue-500 cursor-pointer hover:underline text-sm font-medium"
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
