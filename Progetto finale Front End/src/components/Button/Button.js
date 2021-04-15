import React from "react";
import style from "./Button.module.css";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className={style.button}>
      <Link to="/recipe">
        <button type="submit">Explore recipe</button>
      </Link>
    </div>
  );
}

export default Button;
