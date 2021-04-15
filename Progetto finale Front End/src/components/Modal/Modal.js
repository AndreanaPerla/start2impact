import React from "react";
import style from "./Modal.module.css";
import { BiTime } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  PinterestShareButton,
  PinterestIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

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
          <span>
            <FacebookShareButton url={props.source}>
              <FacebookIcon size={25} round={true} />
            </FacebookShareButton>
            <WhatsappShareButton url={props.source}>
              <WhatsappIcon size={25} round={true} />
            </WhatsappShareButton>
            <PinterestShareButton url={props.source}>
              <PinterestIcon size={25} round={true} />
            </PinterestShareButton>
            <EmailShareButton url={props.source}>
              <EmailIcon size={25} round={true} />
            </EmailShareButton>
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
