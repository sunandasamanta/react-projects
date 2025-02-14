// importing required modules
import { Outlet } from "react-router-dom";

// importing Navbar and Footer components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
