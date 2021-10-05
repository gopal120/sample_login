import React from "react";
import Icons from "./sign-up-icons";
import Input from "./custominput";
import classes from "./signup.module.css";
function SignIn(props) {
  const {
    EnteredValue: EnteredEmail,
    ValueIsValid: EnteredEmailIsValid,
    valueInputChangeHandler: emailHandler,
    setfocus: setEmailFocus,
    HasError: emailerror,
    blurHandler: emailblur,
    reset: EmailReset,
  } = Input((EnteredEmail) => EnteredEmail.includes("@"));
  const {
    EnteredValue: EnteredPassword,
    ValueIsValid: EnteredPasswordIsValid,
    valueInputChangeHandler: PasswordHandler,
    setfocus: setpasswordFocus,
    HasError: passworderror,
    blurHandler: passwordblur,
    reset: passwordReset,
  } = Input((EnteredPassword) => EnteredPassword.trim().length > 8);
  const submithandler = (e) => {
    e.preventDefault();
    props.setisvalid(true);
    if (EnteredPasswordIsValid && EnteredEmailIsValid) {
      props.setisvalid(true);
      EmailReset();
      passwordReset();
    } else props.setisvalid(false);
    !EnteredEmailIsValid && setEmailFocus(true);
    !EnteredPasswordIsValid && setpasswordFocus(true);

  };
  return (
    <div className="form-container sign-in-container">
      <form onSubmit={submithandler}>
        <h1 style={{ color: "black" }}>Sign in</h1>
        <Icons />
        <span>or use your account</span>
        <input
          className={emailerror ? classes.invalid : ""}
          type="email"
          value={EnteredEmail}
          placeholder="E-mail"
          onChange={emailHandler}
          onBlur={emailblur}
          
        />
        <input
          className={passworderror ? classes.invalid : ""}
          type="password"
          value={EnteredPassword}
          placeholder="Password"
          onChange={PasswordHandler}
          onBlur={passwordblur}
          
        />
        <button>SIGN IN</button>
      </form>
    </div>
  );
}

export default SignIn;
