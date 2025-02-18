import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const authenitcated = false;
  return authenitcated ? (
    <Outlet />
  ) : (
    <Navigate state={{ message: "You must log in first!" }} to="login" />
  );
};

export default AuthRequired;
