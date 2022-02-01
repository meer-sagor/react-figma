import React from "react";
import Tippy from "@tippyjs/react";
import { useSelector, useDispatch } from "react-redux";
import {
  setRectangleText,
  setToggle,
  backToView,
} from "../../Store/EditableText";
import { GoTriangleDown } from "react-icons/go";
import { BiRectangle } from "react-icons/bi";
import { BsCircle, BsTriangle } from "react-icons/bs";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import AddShapeList from "./AddShapeList";
import Input from "../UI/Input";

import classes from "./Shape.module.css";

const Shape = () => {
  const { rectangle, circle, triangle } = useSelector((state) => state.shapes);
  const { toggle, defaultRectangleText } = useSelector(
    (state) => state.editText
  );
  const dispatch = useDispatch();
  const { rectangles } = rectangle;
  const { circles } = circle;
  const { triangles } = triangle;

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

        <div
          className={classes.circles}
          style={{ display: circles.length === 0 ? "none" : "block" }}
        >
          {circles.map((cir) => (
            <p key={cir.id}>
              <span style={{ color: "green" }}>
                <BsCircle />
              </span>
              {cir.title}
            </p>
          ))}
        </div>
        <div
          className={classes.rectangles}
          style={{ display: rectangles.length === 0 ? "none" : "block" }}
        >
          {rectangles.map((rect) =>
            toggle ? (
              <p key={rect.id} onDoubleClick={() => dispatch(setToggle())}>
                <span style={{ color: "red" }}>
                  <BiRectangle />
                </span>
                {defaultRectangleText}
              </p>
            ) : (
              <div className={classes['edit-shape__layer--text']}>
                <span style={{ color: "red" }}>
                  <BiRectangle />
                </span>
                <Input
                  type="text"
                  value={defaultRectangleText}
                  onChange={(event) =>
                    dispatch(setRectangleText(event.target.value))
                  }
                  onKeyDown={(event) => dispatch(backToView(event))}
                />
              </div>
            )
          )}
        </div>
        <div
          className={classes.triangles}
          style={{ display: triangles.length === 0 ? "none" : "block" }}
        >
          {triangles.map((tri) => (
            <p key={tri.id}>
              <span style={{ color: "blue" }}>
                <BsTriangle />
              </span>
              {tri.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shape;
