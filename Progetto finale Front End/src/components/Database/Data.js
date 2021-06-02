import React, { useState } from "react";
import style from "./Data.module.css";
import { RiQuestionnaireFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import Modal from "../Modal/Modal";
import fire from "../Firebase/fire";

export default function Data({ db }) {
  const [show, setShow] = useState(false);

  const deleteDb = () => {
    const user = fire.auth().currentUser.uid;
    const database = fire.database();
    const ref = database.ref("users");
    const dbUser = ref.child(user);
    const removeFav = dbUser.child(db.id);
    removeFav.remove();
  };

  return (
    <div className={style.favorite_card}>
      <div className={style.favorite_main}>
        <div className={style.favorite_title}>
          <h3>{db.Recipe}</h3>
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
            title={db.Recipe}
            time={db.Time}
            people={db.People}
            source={db.Source}
          />
          <IoIosCloseCircle
            size={25}
            className={style.close}
            onClick={() => {
              deleteDb();
            }}
          />
        </div>
      </div>
    </div>
  );
}
