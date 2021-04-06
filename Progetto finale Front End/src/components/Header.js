import React from "react";
import style from "./Header.module.css";
import header_img from "../assets/header-img.svg";
import Button from "./Button";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.header_text}>
        <div className={style.header_text_content}>
          <h1>Start cooking veggie</h1>
          <p className={style.text_cook}>
            Want to learn cook veggie but you don't know how to start?
          </p>
          <p className={style.text_worry}>No need to worry!</p>
          <Button />
        </div>
      </div>
      <img src={header_img} alt="" className={style.header_img} />
    </div>
  );
}

export default Header;
