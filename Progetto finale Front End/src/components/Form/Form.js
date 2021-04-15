import React from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    pswError,
  } = props;

  return (
    <section className={style.form_login}>
      <div className={style.form_container}>
        <div className={style.username}>
          <label>Username</label>
          <input
            type="text"
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={style.errorMsg}>{emailError}</p>
        </div>
        <div className={style.psw}>
          <label>Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className={style.errorMsg}>{pswError}</p>
        </div>
        <div className={style.btn}>
          {hasAccount ? (
            <div>
              <button onClick={handleLogin}>Sign in</button>
              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </div>
          ) : (
            <div>
              <button onClick={handleSignup}>Sign up</button>
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
