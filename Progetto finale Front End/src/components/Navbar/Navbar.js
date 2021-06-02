import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../Firebase/fire";
import style from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const history = useHistory();

  const handleLogout = () => {
    fire.auth().signOut();
    history.push("/");
  };

  return (
    <div className={style.nav}>
      <img src={logo} alt="" />
      <ul
        className={style.nav_list}
        style={{ transform: open ? "translateY(0px)" : "" }}
      >
        <Link to="/home" className={style.link}>
          <li>Home</li>
        </Link>
        <Link to="/recipe" className={style.link}>
          <li>Recipe</li>
        </Link>
        <Link to="/about" className={style.link}>
          <li>About us</li>
        </Link>
        <li
          className={style.link}
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        >
          Logout
        </li>
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
