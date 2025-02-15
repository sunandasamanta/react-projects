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
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Income
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
