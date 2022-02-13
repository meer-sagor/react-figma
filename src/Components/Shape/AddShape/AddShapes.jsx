import React from "react";
import { useDispatch } from "react-redux";
import { BiRectangle } from "react-icons/bi";
import { BsCircle, BsTriangle } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import {
  addRectangle,
  addCircle,
  addTriangle,
} from "../../../Store/ShapesSlice";

import classes from "./AddShapeList.module.css";

const AddShapeList = () => {
  const dispatch = useDispatch();
  let globalNumber = 0;

  const handleClick = (event) => {
    const innerText = event.target.innerText;
    globalNumber += 1;
    const nameUpdate = innerText + globalNumber;

    if (innerText === "Rectangle") {
      const rectAngle = {
        name: nameUpdate,
        id: uuidv4(),
        toggle: true,
        x: 20,
        y: 20,
        width: 100,
        height: 100,
        fill: "red",
      };
      dispatch(addRectangle(rectAngle));
    }
    if (innerText === "Circle") {
      const circleData = {
        name: nameUpdate,
        id: uuidv4(),
        toggle: true,
        x: 200,
        y: 100,
        width: 100,
        height: 100,
        radius: 50,
        fill: "green",
      };
      dispatch(addCircle(circleData));
    }
    if (innerText === "Triangle") {
      const triangleData = {
        name: nameUpdate,
        id: uuidv4(),
        toggle: true,
        x: 300,
        y: 200,
        width: 20,
        height: 20,
        points: [0, 0, 200, 0, 100, -150],
        closed: true,
        fill: "blue",
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
