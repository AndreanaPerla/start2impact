import React from "react";
import style from "./NavLog.module.css";
import logo from "../../assets/logo-white.svg";

function NavLog() {
  return (
    <div className={style.navlog}>
      <img src={logo} alt="" />
    </div>
  );
}

export default NavLog;
