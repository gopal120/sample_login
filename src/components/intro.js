import React from "react";
import { useState } from "react";
import "./intro.css";

function Intro(props) {
  const [signup, setsignup] = useState(false);
  const buttonHandler = (e) => {
    e.preventDefault();
    setsignup((prev) => !prev);
    props.setform((prev) => !prev);
  };
  const intro = (
    <div>
      <h1>HELLO,FRIEND!</h1>
      <p>enter your personal details and start journey with us </p>
    </div>
  );
  const welcome = (
    <div>
      <h1>WELCOME BACK!</h1>
      <p> To keep connected with us please login </p>
    </div>
  );
  const state = signup ? "SIGN UP" : "SIGN IN";
  return (
    <div className="overlay">
      <div className="intro">
        {signup ? welcome : intro}
        <button onClick={buttonHandler}> {state}</button>
      </div>
    </div>
  );
}

export default Intro;
