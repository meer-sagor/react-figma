import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

import Input from "../UI/Input";
import ShapeExport from "./ShapeExport";

import {
  setRectangleWidth,
  setRectangleHeight,
  setRectangleXAxis,
  setRectangleYAxis,
  setRectangleColor,
} from "../../Store/RectangleShapeSlice";

import classes from "./Properties.module.css";
const Properties = ({ handlerExport }) => {
  const { rectangles, selectedRectangle } = useSelector(
    (state) => state.rectangle
  );
  const dispatch = useDispatch();
  const selectedId = selectedRectangle.id;
  const selectedProperties = rectangles.filter(
    (values) => values.id === selectedId
  );
  const values = selectedProperties[0];

  let isDisabled = true;
  if (rectangles.length !== 0) {
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
          content={<ShapeExport onClick={handlerExport} />}
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
        <Input
          disabled={isDisabled}
          label={`width`}
          type="number"
          min={0}
          value={values?.width}
          onChange={(event) => dispatch(setRectangleWidth(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`height`}
          type="number"
          min={0}
          value={values?.height}
          onChange={(event) => dispatch(setRectangleHeight(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`x axis`}
          type="number"
          min={0}
          value={values?.x}
          onChange={(event) => dispatch(setRectangleXAxis(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`y axis`}
          type="number"
          min={0}
          value={values?.y}
          onChange={(event) => dispatch(setRectangleYAxis(event.target.value))}
        />
        <Input
          disabled={isDisabled}
          label={`color`}
          type="color"
          value={values?.fill}
          style={{ background: `${values?.fill}` }}
          onChange={(event) => dispatch(setRectangleColor(event.target.value))}
        />
      <button className={classes['delete-button']}>Delete</button>
      </div>
    </div>
  );
};

export default Properties;
