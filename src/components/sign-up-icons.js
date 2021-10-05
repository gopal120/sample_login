import React from "react";
import classes from "./signup.module.css";
function Icons() {
  return (
    <div className={classes.socialContainer}>
      <a href="#0" className="social">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#0" className="social">
        <i className="fab fa-google-plus-g"></i>
      </a>
      <a href="#0" className="social">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
}

export default Icons;
