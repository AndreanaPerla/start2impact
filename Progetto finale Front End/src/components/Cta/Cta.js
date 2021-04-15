import React from "react";
import style from "./Cta.module.css";
import banner from "../../assets/ready-to-cook-img.svg";
import Button from "../Button/Button";

function Cta() {
  return (
    <div className={style.cta}>
      <img src={banner} alt="" className={style.banner_img} />
      <div className={style.banner_text}>
        <h2>Are you ready to cook veggie food?</h2>
        <Button />
      </div>
    </div>
  );
}

export default Cta;
