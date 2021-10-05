import React from "react";
import classes from "./signup.module.css";
import Input from "./custominput";
import Icons from "./sign-up-icons";
function Signup(props) {
  const {
    EnteredValue: EnteredName,
    ValueIsValid: FullNameIsValid,
    valueInputChangeHandler: FirstNameInputChangeHandler,
    setfocus,
    HasError,
    blurHandler,
    reset: FirstNameReset,
  } = Input((EnteredFirstName) => EnteredFirstName.trim().includes(" "));
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
  const {
    EnteredValue: Enteredgender,
    ValueIsValid: EnteredgenderIsValid,
    valueInputChangeHandler: genderHandler,
    setfocus: setgenderFocus,
    blurHandler: genderblur,
    reset: genderReset,
  } = Input((enteredgender) => enteredgender !== "gender");
  const submitHandler = (e) => {
    e.preventDefault();
    if (FullNameIsValid && EnteredPasswordIsValid && EnteredEmailIsValid) {
      props.setisvalid(true);
      props.data({
        name: EnteredName,
        email: EnteredEmail,
        password: EnteredPassword,
        gender: Enteredgender,
        date: new Date(),
      });
      FirstNameReset();
      genderReset();
      passwordReset();
      EmailReset();
    } else props.setisvalid(false);
    !FullNameIsValid && setfocus(true);
    !EnteredPasswordIsValid && setpasswordFocus(true);
    !EnteredEmailIsValid && setEmailFocus(true);
    !EnteredgenderIsValid && setgenderFocus(true);
  };

  return (
    <div className={`${classes.formContainer} `}>
      <form onSubmit={submitHandler}>
        <h1 className={classes.header}>Create Account</h1>
        <Icons />
        <span>or use your email for registration</span>
        <input
          value={EnteredName}
          className={HasError ? classes.invalid : ""}
          type="text"
          placeholder="Full Name"
          onChange={FirstNameInputChangeHandler}
          onBlur={blurHandler}
          
        />
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
        <select 
          name="gender"
          onChange={genderHandler}
          onBlur={genderblur}
          required
        >
          <option value="">GENDER</option>
          <option value="MALE">MALE</option>
          <option value="FEMALE">FEMALE</option>
        </select>
        <button>sign up</button>
      </form>
    </div>
  );
}

export default Signup;
