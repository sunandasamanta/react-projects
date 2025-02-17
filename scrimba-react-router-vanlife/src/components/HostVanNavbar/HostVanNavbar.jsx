import { NavLink } from "react-router-dom";

const VanNavbar = () => {
  return (
    <nav className="flex gap-4 text-dark text-md">
      <NavLink
        to={`.`}
        className={({ isActive }) =>
          isActive ? "active-nav-item" : "hover-nav-item"
        }
        end
      >
        Details
      </NavLink>
      <NavLink
        to={`pricing`}
        className={({ isActive }) =>
          isActive ? "active-nav-item" : "hover-nav-item"
        }
      >
        Pricing
      </NavLink>
      <NavLink
        to={`photos`}
        className={({ isActive }) =>
          isActive ? "active-nav-item" : "hover-nav-item"
        }
      >
        Photos
      </NavLink>
    </nav>
  );
};

export default VanNavbar;
