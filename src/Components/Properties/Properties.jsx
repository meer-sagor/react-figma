import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

import Input from "../UI/Input";
import ShapeExport from "./ShapeExport";

import {
  shapeRectanglePropertiesValueUpdate,
  shapeCirclePropertiesValueUpdate,
} from "../../Store/ShapesSlice";

import classes from "./Properties.module.css";
const Properties = ({ handlerExport }) => {
  const { rectangles, circles, triangles, selectedItem } = useSelector(
    (state) => state.shapes
  );
  const dispatch = useDispatch();
  const selectedId = selectedItem.id;
  let selectedProperties = rectangles.filter(
    (values) => values.id === selectedId
  );

  const values = selectedProperties[0];

  let isDisabled = true;
  if (
    rectangles.length !== 0 ||
    circles.length !== 0 ||
    triangles.length !== 0
  ) {
    isDisabled = false;
  }
  const valueChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatch(
      shapeRectanglePropertiesValueUpdate({
        ...selectedProperties[0],
        [name]: value,
      })
    );
  };

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
          name="width"
          type="number"
          min={0}
          value={values?.width}
          onChange={valueChangeHandler}
        />
        <Input
          disabled={isDisabled}
          label={`height`}
          type="number"
          name="height"
          min={0}
          value={values?.height}
          onChange={valueChangeHandler}
        />
        <Input
          disabled={isDisabled}
          label={`x axis`}
          type="number"
          name="x"
          min={0}
          value={values?.x}
          onChange={valueChangeHandler}
        />
        <Input
          disabled={isDisabled}
          label={`y axis`}
          type="number"
          name="y"
          min={0}
          value={values?.y}
          onChange={valueChangeHandler}
        />
        <Input
          disabled={isDisabled}
          label={`color`}
          type="color"
          name="fill"
          value={values?.fill}
          style={{ background: `${values?.fill}` }}
          onChange={valueChangeHandler}
        />
        <button
          className={classes["delete-button"]}
          onClick={() => {}}
          disabled={isDisabled}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Properties;
