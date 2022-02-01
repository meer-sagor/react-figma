import React from "react";
import Tippy from "@tippyjs/react";
import { GoTriangleDown } from "react-icons/go";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/perspective.css";
import AddShapeList from "./AddShapeList";
import Button from "../UI/Button";

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
        <h3 className={classes.title}>shapes</h3>
      </div>
    </div>
  );
};

export default Shape;
