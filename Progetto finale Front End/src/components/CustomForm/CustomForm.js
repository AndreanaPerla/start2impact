import React, { useState, useEffect } from "react";
import style from "./CustomForm.module.css";
import validator from "validator";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  const updateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("Write a valid email please!");
    }
  };

  const nullEmail = (e) => {
    if (email.length === 0) {
      setEmailError("Email cannot be empty...");
    }
  };

  useEffect(() => {
    if (status === "success") clearField();
  }, [status]);

  const clearField = () => {
    setEmail("");
  };

  return (
    <div className={style.newsletter}>
      <div className={style.news_text}>
        <h3>Newsletter</h3>
        <p className={style.tuned}>Stay tuned!</p>
        <p className={style.updates}>Subscribe to get weekly recipe updates</p>
      </div>
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.input}>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="jane.doe@mail.com"
            onChange={updateEmail}
          />
        </div>
        <button type="submit" onClick={nullEmail}>
          Subscribe
        </button>
      </form>
      {status === "sending" && (
        <div className="alert sending" style={{ color: "white" }}>
          ...sending...
        </div>
      )}
      <div style={{ color: "red" }}>{emailError}</div>
      {status === "success" && (
        <div
          className="alert success"
          dangerouslySetInnerHTML={{ __html: message }}
          style={{ color: "white" }}
        />
      )}
    </div>
  );
};

export default CustomForm;
