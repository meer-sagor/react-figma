import React from "react";
import Tippy from "@tippyjs/react";
import { useSelector, useDispatch } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import { BsCircleFill, BsTriangleFill } from "react-icons/bs";
import { RiCheckboxBlankFill } from "react-icons/ri";
import AddShapeList from "./AddShape/AddShapes";
import Input from "../UI/Input";

import "tippy.js/animations/perspective.css";
import "tippy.js/dist/tippy.css";
import {
  setShapeToggle,
  setShapeText,
  getShapeItem,
  backToShape,
} from "../../Store/ShapesSlice";

import classes from "./Shape.module.css";

const Shape = () => {
  const { shapeToggle, rectangles, circles, triangles } = useSelector(
    (state) => state.shapes
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
  const onKeyDownHandler = (event, rect) => {
    const keys = event.key;
    const obj = {
      keys,
      rect,
    };
    dispatch(backToShape(obj));
  };

  return (
    <div className={classes["shape"]}>
      <div className={classes["shape-actions"]}>
        <Tippy
          content={<AddShapeList />}
          placement={`bottom`}
          interactive={true}
          trigger={`click`}
          animation={`perspective`}
        >
          <button className={classes["shape-button"]}>
            Add Shape
            <span>
              <GoTriangleDown />
            </span>
          </button>
        </Tippy>
      </div>
      <div className={classes["shape-content"]}>
        <h3 className={classes.title}>Shapes</h3>
        <div className={classes.rectangles}>
          {rectangles.map((rect) =>
            rect.toggle ? (
              <p
                key={rect.id}
                onDoubleClick={() => onDoubleClickHandler(rect)}
                onClick={() => {
                  dispatch(getShapeItem(rect));
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
                  onKeyDown={(event) => onKeyDownHandler(event, rect)}
                />
              </div>
            )
          )}
          {circles.map((cir) =>
            cir.toggle ? (
              <p
                key={cir.id}
                onDoubleClick={() => onDoubleClickHandler(cir)}
                onClick={() => {
                  dispatch(getShapeItem(cir));
                }}
              >
                <span style={{ color: `${cir.fill}` }}>
                  <BsCircleFill />
                </span>
                {cir.name}
              </p>
            ) : (
              <div className={classes["edit-shape__layer--text"]} key={cir.id}>
                <span style={{ color: `${cir.fill}` }}>
                  <RiCheckboxBlankFill />
                </span>
                <Input
                  type="text"
                  value={cir.name}
                  onChange={(event) => inputChangeHandler(cir.id, event)}
                  onKeyDown={(event) => onKeyDownHandler(event, cir)}
                />
              </div>
            )
          )}
          {triangles.map((tri) => (
            <p
              key={tri.id}
              onDoubleClick={() => onDoubleClickHandler(tri)}
              onClick={() => {
                dispatch(getShapeItem(tri));
              }}
            >
              <span style={{ color: `${tri.fill}` }}>
                <BsTriangleFill />
              </span>
              {tri.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shape;
