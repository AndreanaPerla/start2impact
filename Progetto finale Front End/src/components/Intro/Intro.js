import React from "react";
import style from "./Intro.module.css";
import intro_img from "../../assets/about-us-img.svg";

function Intro() {
  return (
    <div className={style.intro}>
      <img src={intro_img} alt="" />
      <p>
        Food is probably the only thing that has the power to bring people
        together. Do you know what else holds people together (in a more
        concrete way)? The Earth, our planet. And, you know, it's not doing
        well. One of the ways we have to help make the Earth a little more
        livable concerns food, our food choices to be precise. The day we
        realized this, our life changes
      </p>
    </div>
  );
}

export default Intro;
