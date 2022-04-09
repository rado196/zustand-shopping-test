import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout(props: PropsType) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Outlet />
    </div>
  );
}

export default AuthLayout;
