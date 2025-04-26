import { useNavigate } from "react-router";

import Input from "./ui/Input";
import Button from "./ui/Button";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center">
        <p className="text-3xl font-extrabold text-gray-800 mb-1 text-center">
          Sign In
        </p>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Sign in to your account
        </p>
        <form action="" className="w-full">
          <div className="mb-4">
            <Input type="email" name="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <Button>Sign In</Button>
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
