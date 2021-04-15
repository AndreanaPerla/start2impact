import React from "react";
import style from "./Mission.module.css";

function Mission() {
  return (
    <div className={style.mission}>
      <h2>Our mission</h2>
      <div className={style.mission_text}>
        <div className={style.text_card}>
          <p>
            Prove that the vegetarian diet is not just "influencer/ millenial
            stuff", but something within everyone's reach
          </p>
        </div>
        <div className={style.text_card}>
          <p>Prove that a vegetarian diet can be full of flavours and tasty</p>
        </div>
        <div className={style.text_card}>
          <p>
            Create the awareness that we can all do our part to help the planet
            with a simple change in our eating habits
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
