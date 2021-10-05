import React from "react";
import classes from "./welcome.module.css";
function Welcome(props) {
  const logout=(e)=>{
    e.preventDefault();
    props.setisvalid(false)
  }
  return (
    <div className={classes.welcome}>
      <p className={classes.para}>WELCOME BACK </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Welcome;
