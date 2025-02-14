import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";

const HostLayout = () => {
  const params = useParams();
  console.log(params);
  
  return (
    <>
      <nav className="flex gap-x-4 text-">
        <NavLink
          to="/host"
          className={(isActive) => (isActive ? "font-bold" : "text-red-800")}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={(isActive) => (isActive ? "font-bold" : "text-red-800")}
        >
          Reviews
        </NavLink>
        <NavLink
          to="/host/income"
          className={(isActive) => (isActive ? "font-bold" : "text-red-800")}
        >
          Income
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
