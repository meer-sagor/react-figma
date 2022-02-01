import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

import Input from "../UI/Input";
import ShapeExport from "./ShapeExport";
import {
  setWidth,
  setHeigh,
  setXAxis,
  setYAxis,
} from "../../Store/ShapePropertiesSlice";

import classes from "./Properties.module.css";
const Properties = () => {
  const { rectangle, circle, triangle } = useSelector((state) => state.shapes);
  const dispatch = useDispatch();
  const { rectangles } = rectangle;
  const { circles } = circle;
  const { triangles } = triangle;

  let isDisabled = true;

  if (
    circles.length !== 0 ||
    rectangles.length !== 0 ||
    triangles.length !== 0
  ) {
    isDisabled = false;
  }

  return (
    <div className={classes["properties"]} disabled={isDisabled}>
      <div className={classes["properties-actions"]}>
        <button disabled={isDisabled}>save</button>
        <Tippy
          placement="bottom"
          interactive={true}
          theme="light"
          trigger="click"
          offset={[10, 10]}
          content={<ShapeExport />}
        >
          <button className={classes["button-alt"]} disabled={isDisabled}>
            export
            <span>
              <GoTriangleDown />
            </span>
          </button>
        </Tippy>
      </div>
      <div className={classes["properties-content"]}>
        <h3 className={classes.title}>properties</h3>
        <Input label={`rectangle`} disabled={isDisabled} />
        <Input
          disabled={isDisabled}
          label={`width`}
          type="number"
          min={0}
          onChange={(event) => dispatch(setWidth(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`height`}
          type="number"
          min={0}
          onChange={(event) => dispatch(setHeigh(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`x axis`}
          type="number"
          min={0}
          onChange={(event) => dispatch(setXAxis(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`y axis`}
          type="number"
          min={0}
          onChange={(event) => dispatch(setYAxis(event.target.value))}
        />
        <Input disabled={isDisabled} label={`color`} type="text" />
      </div>
    </div>
  );
};

export default Properties;
