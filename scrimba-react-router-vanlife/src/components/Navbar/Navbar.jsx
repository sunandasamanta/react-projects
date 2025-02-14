import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex p-3 sm:p-6 justify-between items-center">
      <div className="font-bold text-xl text-black">
        <Link className="" to="/">
          #VANLIFE
        </Link>
      </div>
      <div className="flex gap-x-4 text-nav">
        <NavLink
          to="/host"
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `active-nav-item` : "hover-nav-item"
          }
          to="/vans"
        >
          Vans
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
