import React, { useState, useEffect } from "react";
import style from "./RecipeCard.module.css";
import { RiChatHeartFill, RiQuestionnaireFill } from "react-icons/ri";
import Modal from "../Modal/Modal";
import fire from "../Firebase/fire";

function RecipeCard({ id, title, img, time, people, summary, source }) {
  const [show, setShow] = useState(false);
  const [userList, setUserList] = useState([]);

  const demoDb = () => {
    const user = fire.auth().currentUser.uid;
    const database = fire.database();
    const ref = database.ref("users");
    const recipe = {
      Recipe: title,
      Id: id,
      Source: source,
      Time: time,
      People: people,
    };
    ref.child(user).push(recipe);
  };

  useEffect(() => {
    const user = fire.auth().currentUser.uid;
    const database = fire.database();
    const ref = database.ref("users");
    ref.child(user).on("value", (snapshot) => {
      const userDb = snapshot.val();
      const userList = [];
      for (let id in userDb) {
        userList.push({ id, ...userDb[id] });
      }
      setUserList(userList);
    });
  }, []);

  const storeDb = userList.find((o) => o.Id === id);
  const btnDisabled = storeDb ? true : false;

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
            summary={summary}
            source={source}
          />
          <button
            type="button"
            disabled={btnDisabled}
            onClick={() => {
              demoDb();
            }}
          >
            <RiChatHeartFill size={25} className={style.heart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
