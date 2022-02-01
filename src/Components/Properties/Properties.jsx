import React from "react";
import { GoTriangleDown } from "react-icons/go";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";

import Button from "../UI/Button";
import Input from "../UI/Input";

import classes from "./Properties.module.css";
import ShapeExport from "./ShapeExport";
const Properties = () => {
  return (
    <div className={classes["properties"]}>
      <div className={classes["properties-actions"]}>
        <Button>save</Button>
        <Tippy
          placement="bottom"
          interactive={true}
          theme="light"
          trigger="click"
          offset={[10, 10]}
          content={<ShapeExport />}
        >
          <button className={classes["button-alt"]}>
            export
            <span>
              <GoTriangleDown />
            </span>
          </button>
        </Tippy>
      </div>
      <div className={classes["properties-content"]}>
        <h3 className={classes.title}>properties</h3>
        <Input label={`rectangle`} />
        <Input label={`width`} />
        <Input label={`height`} />
        <Input label={`x axis`} />
        <Input label={`y axis`} />
        <Input label={`color`} />
      </div>
    </div>
  );
};

export default Properties;
