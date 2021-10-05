import React from "react";
import classes from "./layout.module.css";
function Layout(props) {
  return <div className={classes.layout}>{props.children}</div>;
}
export default Layout;
