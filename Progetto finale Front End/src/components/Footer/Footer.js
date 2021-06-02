import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/logo-white.svg";
import bg_top from "../../assets/bg-top-footer.svg";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Newsletter from '../Newsletter/Newsletter';

function Footer() {
  return (
    <div className={style.footer_main}>
        <img src={bg_top} alt="" className={style.bg_top} />      
        <div className={style.footer}>

          <div className={style.logo_contacts}>
            <img src={logo} alt="" className={style.footer_logo} />
            <p>
              <span>
                <FiMail size={25} />
              </span>
              example@veggiepath.com
            </p>
            <div className={style.socials}>
              <FaFacebook className={style.fb} size={27} />
              <FaInstagram className={style.ig} size={27} />
              <AiFillTwitterCircle className={style.tw} size={27} />
              <FaPinterest className={style.pin} size={27} />
            </div>
          </div>

          <Newsletter />
        </div>
      </div>
  );
}

export default Footer;

