import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-11/12 mx-auto sm:w-1/3 p-6">
      <h1 className="font-bold text-xl my-4">
        Sorry, the page you were looking for was not found.
      </h1>
      <button className="btn w-full">
        <Link to="/">Return to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
