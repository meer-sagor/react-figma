import React from "react";
import { BiRectangle } from "react-icons/bi";
import { BsCircle, BsTriangle } from "react-icons/bs";

import classes from "./AddShapeList.module.css";

const AddShapeList = () => {
  const handleClick = (event) => {
    const innerText = event.target.innerText;
    
    if (innerText === "Rectangle") {
      console.log("added rectangle shape");
    } else {
      console.log("you might click another text");
    }
  };
  return (
    <div className={classes.addShape}>
      <div className={classes.rectangle} onClick={handleClick}>
        <p>
          <span>
            <BiRectangle />
          </span>
          Rectangle
        </p>
      </div>
      <div className={classes.circle} onClick={handleClick}>
        <p>
          <span>
            <BsCircle />
          </span>
          Circle
        </p>
      </div>
      <div className={classes.triangle} onClick={handleClick}>
        <p>
          <span>
            <BsTriangle />
          </span>
          Triangle
        </p>
      </div>
    </div>
  );
};

export default AddShapeList;
