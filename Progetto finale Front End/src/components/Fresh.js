import React from "react";
import style from "./Fresh.module.css";
import fresh_img from "../assets/fresh-healthy-img.svg";

function Fresh() {
  return (
    <div className={style.fresh}>
      <img src={fresh_img} alt="" className={style.fresh_img} />
      <div className={style.fresh_text}>
        <div className={style.fresh_text_content}>
          <h2>Fresh and healthy</h2>
          <p>
            Who said a veggie diet has to be sad and tasteless? Vegetarian foods
            can also have extraordinary flavours, plus they can make your life
            helathier today and in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fresh;
