import React, { useState, useContext } from "react";
import style from "./FavoriteCard.module.css";
import Modal from "../Modal/Modal";
import { GlobalContext } from "../../context/GlobalState";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";

function FavoriteCard({ id, title, time, people, instructions, source }) {
  const [show, setShow] = useState(false);

  const { removeFavorite } = useContext(GlobalContext);

  return (
    <div className={style.favorite_card}>
      <div className={style.favorite_main}>
        <div className={style.favorite_title}>
          <h3>{title}</h3>
        </div>
        <div className={style.favorite_info}>
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
            source={source}
          />
          <IoIosCloseCircle
            size={25}
            className={style.close}
            onClick={() => removeFavorite(id)}
          />
        </div>
      </div>
    </div>
  );
}

export default FavoriteCard;
