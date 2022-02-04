import React from "react";
import Button from "../UI/Button";


import classes from "./ShapeExport.module.css";

const ShapeExport = ({onClick}) => {
  return (
    <div className={classes["export-action"]}>
      <Button
        className={classes["export-action__button"]}
       onClick={onClick}
      >
        PNG
      </Button>
      <div className={classes.border} />
      <Button className={classes["export-action__button"]} onClick={onClick}>JPG</Button>
    </div>
  );
};

export default ShapeExport;
