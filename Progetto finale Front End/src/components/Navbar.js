import React, { useState } from "react";
import style from "./Navbar.module.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.nav}>
      <img src={logo} alt="" />
      <ul
        className={style.nav_list}
        style={{ transform: open ? "translateY(0px)" : "" }}
      >
        <Link to="/" className={style.link}>
          <li>Home</li>
        </Link>
        <Link to="/recipe" className={style.link}>
          <li>Recipe</li>
        </Link>
        <Link to="/about" className={style.link}>
          <li>About us</li>
        </Link>
      </ul>
      <FiMenu
        onClick={() => setOpen(!open)}
        size={25}
        className={style.mobile_menu}
      />
    </div>
  );
}

export default Navbar;
