import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="box-container">
      <h1 className="font-bold text-4xl my-4">
        Sorry, the page you were looking for was not found.
      </h1>
      <button className="btn">
        <Link to="/">Return to home</Link>
      </button>
    </div>
  );
};

export default NotFound;
