import React from "react";
import "../App.css";
import NavLog from "../components/NavLog/NavLog";
import Authentication from "../components/Authentication/Authentication";

function Login() {
  return (
    <div className="login">
      <NavLog />
      <Authentication />
    </div>
  );
}

export default Login;
