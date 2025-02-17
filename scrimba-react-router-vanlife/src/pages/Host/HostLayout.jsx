import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  
  return (
    <>
      <nav className="flex gap-x-4 p-6">
        <NavLink
          end
          to="."
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Income
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Vans
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
