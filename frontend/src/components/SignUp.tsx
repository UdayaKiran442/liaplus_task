import Input from "./ui/Input";
import Button from "./ui/Button";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <p className="text-2xl font-bold">Sign Up</p>
      <div className="flex justify-center items-center mt-40">
        <form action="">
          <div className="mb-4">
            <Input type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <Input type="email" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div className="flex">
            <Button>Sign Up</Button>
            <p className="ml-2 text-gray-500 text-sm font-light items-center justify-center flex">
              Already have an account?{" "}
              <span className="text-blue-500 cursor-pointer ml-1.5">
                Sign In
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
