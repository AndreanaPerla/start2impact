import React from "react";
import style from "./Future.module.css";
import choice_img from "../../assets/choice-img.svg";

function Future() {
  return (
    <div className={style.choice}>
      <img src={choice_img} alt="" className={style.choice_img} />
      <div className={style.choice_text}>
        <div className={style.choice_text_content}>
          <h2>A choice for the future</h2>
          <p>
            It is not a mistery that livestock farming is one of the great
            causes of global pollution. But as long as the demand for meat
            remains costant, farms will also remain. Anyone can make a small
            contribution to safeguarding the planet by reducing the consumption
            of animal products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Future;
