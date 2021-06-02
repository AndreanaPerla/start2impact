import React, { useState, useEffect } from "react";
import fire from "../Firebase/fire";
import Data from "./Data";

function Database() {
  const [userList, setUserList] = useState([]);

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
      //console.log(userList);
      setUserList(userList);
    });
  }, []);

  return (
    <div
      style={{
        width: "90%",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {userList.length > 0 ? (
        userList.map((db) => <Data db={db} key={db.Id} />)
      ) : (
        <h2 style={{ width: "100%", margin: "0 auto", marginTop: 20 }}>
          No recipe in your list, add some!
        </h2>
      )}
    </div>
  );
}

export default Database;
