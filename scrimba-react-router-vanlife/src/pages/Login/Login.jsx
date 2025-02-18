import React from "react";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const message = location.state?.message
  return (
    <div className="box-container flex-col">
      {message && <h3 className="text-md font-medium text-red-500">{message}</h3>}
      <h1 className="text-2xl font-bold text-center mb-6">
        Sign in to your account
      </h1>
      <form className="w-11/12 sm:w-1/2 max-w-[500px]">
          <input
            className="w-full bg-white px-5 py-4 outline-none border border-gray-200 focus:border-green-600 rounded-t-md mt-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full bg-white px-5 py-4 outline-none border border-gray-200 focus:border-green-600 rounded-b-md mb-2"
            type="password"
            placeholder="Password"
          />
        <button className="btn w-full mt-6" type="submit">
          Login
        </button>
      </form>
      <div className="">
        <p className="mt-4">
          Don't have an account?{" "}
          <Link className="font-bold underline" to="signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
