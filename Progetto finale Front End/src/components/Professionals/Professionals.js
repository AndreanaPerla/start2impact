import React from "react";
import style from "./Professionals.module.css";
import pro_img from "../../assets/skilled-professionals.svg";

function Professionals() {
  return (
    <div className={style.professionals}>
      <div className={style.pro_text}>
        <div className={style.pro_text_content}>
          <h2>A team of skilled professionals</h2>
          <p>
            Our food professionals have studied recipes suitable for everyone.
            If can barely boil an egg, if you can burn the pans withour even
            turn on the stove, don't despair. Test yourself with simple recipes:
            your moment to shine is finally here!
          </p>
        </div>
      </div>
      <img src={pro_img} alt="" className={style.pro_img} />
    </div>
  );
}

export default Professionals;
