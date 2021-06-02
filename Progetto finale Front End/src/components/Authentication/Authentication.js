import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Form from "../Form/Form";
import fire from "../Firebase/fire";
import style from "./Authentication.module.css";

const Authentication = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pswError, setPswError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [btnDisabled, setButtonDisabled] = useState (true);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPswError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPswError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPswError(err.message);
            break;
        }
      });
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const checkValidation = (e) => {
    const confPsw = e.target.value;
    setConfirmPassword(confPsw);
    if (password != confPsw) {
      setConfirmError("Please check your password");
    } else {
      setConfirmError("Password match")
      setButtonDisabled(!btnDisabled)
    }
  }

  return (
    <div>
      {user ? (
        <Redirect to="/home" />
      ) : (
        <div className={style.authentication}>
          <div className={style.copy}>
            <p>
              Tasty and full of flavors. Do they seem like adjectives that have
              nothing to do with veg food? What if we also told you that
              changing your diet could help change the world?
            </p>
            <p>Now we have your attention!</p>
            <p>
              To understand what we are talking about, register and discover
              TheVeggiePath
            </p>
          </div>
          <div className={style.form}>
            <Form
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              emailError={emailError}
              pswError={pswError}
              confirmError={confirmError}
              setConfirmError={setConfirmError}
              checkValidation={checkValidation}
              btnDisabled= {btnDisabled}
              setButtonDisabled={setButtonDisabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
