import React, { useState, useContext } from "react";
import style from "./RecipeCard.module.css";
import { RiChatHeartFill, RiQuestionnaireFill } from "react-icons/ri";
import Modal from "./Modal";
import { GlobalContext } from "../context/GlobalState";

function RecipeCard({ id, title, img, time, people, instructions }) {
  const [show, setShow] = useState(false);

  const { addFavorites } = useContext(GlobalContext);

  return (
    <div className={style.recipe_card}>
      <div className={style.recipe_img}>
        <img src={img} alt="" />
      </div>
      <div className={style.recipe_text}>
        <h3>{title}</h3>
        <div className={style.recipe_info}>
          <RiQuestionnaireFill
            size={25}
            className={style.info}
            onClick={() => setShow(true)}
          />
          <Modal
            show={show}
            onClose={() => setShow(false)}
            title={title}
            time={time}
            people={people}
            instructions={instructions}
          />
          <RiChatHeartFill
            size={25}
            className={style.heart}
            onClick={() =>
              addFavorites({ id, title, time, people, instructions })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
