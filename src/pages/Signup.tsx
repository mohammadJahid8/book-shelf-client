/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useUserSignupMutation } from "@/redux/features/user/userApi";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [userSignup, { isLoading, isError, error }] = useUserSignupMutation();
  const navigate = useNavigate();

  //@ts-ignore
  const data = error?.data;

  const handleSignup = async (event: FormEvent<HTMLFormElement>) => {
    window.scrollTo(0, 0);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    const response = await userSignup(data);

    console.log(response);

    //@ts-ignore
    if (response?.data?.success === true) {
      navigate("/signin");
    }
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <Card shadow={false} className="p-6 shadow-lg">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSignup}
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" required name="name" />
            <Input size="lg" label="Email" required name="email" />

            <Input
              type="password"
              size="lg"
              label="Password"
              required
              name="password"
            />
          </div>
          {isError && (
            <p color="red" className="font-sans text-xs text-red-800">
              {data?.message}
            </p>
          )}

          <Button
            className="mt-6"
            fullWidth
            type="submit"
            disabled={isLoading ? true : false}
          >
            {isLoading ? "Registering..." : "Register"}
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
