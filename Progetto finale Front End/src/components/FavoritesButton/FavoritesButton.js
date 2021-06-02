import React from "react";
import style from "./FavoritesButton.module.css";
import { RiChatHeartFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function FavoritesButton() {
  return (
    <div className={style.favorites}>
      <Link to="/favorites" className={style.favorites_link}>
        <button type="button">
          <div className={style.btn_content}>
            <span>
              <RiChatHeartFill size={23} />
            </span>
            <p>Favorites</p>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default FavoritesButton;
