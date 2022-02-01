import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiRectangle } from "react-icons/bi";
import { BsCircle, BsTriangle } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { addRectangle, addCircle, addTriangle } from "../../Store/ShapesSlice";

import classes from "./AddShapeList.module.css";

const AddShapeList = () => {
  const { x, y, width, height } = useSelector((state) => state.properties);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    const innerText = event.target.innerText;

    if (innerText === "Rectangle") {
      const rectAngle = {
        title: innerText,
        id: uuidv4(),
        x,
        y,
        width,
        height,
        fill: "red",
      };
      dispatch(addRectangle(rectAngle));
    }
    if (innerText === "Circle") {
      const circleData = {
        title: innerText,
        id: uuidv4(),
        x: 20,
        y: 40,
        radius: 50,
        fill: "green",
      };
      dispatch(addCircle(circleData));
    }
    if (innerText === "Triangle") {
      const triangleData = {
        title: innerText,
        id: uuidv4(),
        x: "20",
        y: "20",
        width: "200",
        height: "200",
        fill: "red",
      };
      dispatch(addTriangle(triangleData));
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
