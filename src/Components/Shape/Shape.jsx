import React from "react";
import Tippy from "@tippyjs/react";
import { useSelector } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import AddShapeList from "./AddShapes";
import Rectangle from "./Rectangle";

import "tippy.js/animations/perspective.css";
import "tippy.js/dist/tippy.css";

import classes from "./Shape.module.css";

const Shape = () => {

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
        <Rectangle />
      </div>
    </div>
  );
};

export default Shape;
