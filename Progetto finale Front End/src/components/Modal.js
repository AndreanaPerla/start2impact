import React from "react";
import style from "./Modal.module.css";
import { BiTime } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className={style.modal} onClick={props.onClose}>
      <div className={style.modal_content}>
        <div className={style.modal_close}>
          <IoIosCloseCircle
            size={25}
            className={style.close}
            onClick={props.onClose}
          />
        </div>
        <h1>{props.title}</h1>
        <div className={style.recipe_info}>
          <span className={style.recipe_time}>
            <BiTime size={25} className={style.time} />
            {props.time}"
          </span>
          <span className={style.recipe_people}>
            <BsFillPeopleFill size={25} className={style.people} />
            {props.people}
          </span>
        </div>
        <div className={style.instructions}>
          <p>{props.instructions} </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
