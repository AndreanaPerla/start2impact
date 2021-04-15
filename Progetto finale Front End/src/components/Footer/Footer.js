import React from "react";
import style from "./Footer.module.css";
import logo from "../../assets/logo-white.svg";
import bg_top from "../../assets/bg-top-footer.svg";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

export default class Footer extends React.Component {
  state = {
    email: "",
    emailError: "",
  };

  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };

  validate = () => {
    let emailError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Check your email please!";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };

  render() {
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
          <div className={style.newsletter}>
            <div className={style.news_text}>
              <h3>Newsletter</h3>
              <p className={style.tuned}>Stay tuned!</p>
              <p className={style.updates}>
                Subscribe to get weekly recipe updates
              </p>
            </div>
            <form className={style.form} onSubmit={this.handleSubmit}>
              <div className={style.input}>
                <input
                  type="text"
                  name="email"
                  placeholder="john@mail.com"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    color: "#ff2a2a",
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  {this.state.emailError}
                </div>
              </div>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
