import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiCheckboxBlankFill } from "react-icons/ri";
import Input from "../UI/Input";

import classes from "./Shape.module.css";

import {
  setShapeToggle,
  setShapeText,
  getRectangleItem,
  backToShape,
} from "../../Store/RectangleShapeSlice";


const Rectangle = () => {
  const { shapeToggle, rectangles } = useSelector(
    (state) => state.rectangle
  );
  const dispatch = useDispatch();


  const onDoubleClickHandler = (rect) => {
    dispatch(setShapeToggle(rect));
  };


  const inputChangeHandler = (id, event) => {
    const values = event.target.value;
    const obj = {
      id,
      values,
    };
    dispatch(setShapeText(obj));
  };
  const onKeyDownHandler = () => {
    
    dispatch(backToShape());
  };
  return (
    <div
      className={classes.rectangles}
      style={{ display: rectangles.length === 0 ? "none" : "block" }}
    >
      {rectangles.map((rect) =>
       shapeToggle ? (
          <p
            key={rect.id}
            onDoubleClick={() => onDoubleClickHandler(rect)}
            onClick={() => {
              dispatch(getRectangleItem(rect));
            }}
          >
            <span style={{ color: `${rect.fill}` }}>
              <RiCheckboxBlankFill />
            </span>
            {rect.name}
          </p>
        ) : (
          <div className={classes["edit-shape__layer--text"]} key={rect.id}>
            <span style={{ color: `${rect.fill}` }}>
              <RiCheckboxBlankFill />
            </span>
            <Input
              type="text"
              value={rect.name}
              onChange={(event) => inputChangeHandler(rect.id, event)}
              onKeyDown={onKeyDownHandler()}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Rectangle;
