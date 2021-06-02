import React from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    checkValidation,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    pswError,
    confirmError,
    setConfirmError,
    btnDisabled,
    setButtonDisabled
  } = props;

  return (
    <section className={style.form_login}>
      <div className={style.form_container}>
        <div className={style.username}>
          <label>Email</label>
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
                <span onClick={() => setHasAccount(!hasAccount)}> Sign up</span>
              </p>
            </div>
          ) : (
            <div className={style.confirm}>
              <div className={style.confirmpsw}>
                <label>Confirm password</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => checkValidation(e)}
                />
                <p className={style.errorMsg}>{confirmError}</p>
              </div>
              {btnDisabled ? <button className={style.btndisabled}>Sign up</button> : <button onClick={handleSignup}>Sign up</button>}
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}> Sign in</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
