import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["form-control"]}>
      <span>{props.label}</span>
      <input {...props} />
    </div>
  );
};

export default Input;
