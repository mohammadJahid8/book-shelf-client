import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card shadow={false} className="p-6 shadow-lg">
        <Typography variant="h4" color="blue-gray">
          Sign in
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to signin.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>

          <Button className="mt-6" fullWidth>
            SIGN IN
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}