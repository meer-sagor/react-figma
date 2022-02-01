import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stage, Layer, Rect, Circle } from "react-konva";
import { setToggle, setNewText, backToView } from "../../Store/EditableText";

import classes from "./MainContent.module.css";
const MainContent = () => {
  const { toggle, defaultText } = useSelector((state) => state.editText);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes["main-content"]}>
        <div className={classes["main-content__title"]}>
          {toggle ? (
            <h3 onDoubleClick={() => dispatch(setToggle())}>{defaultText}</h3>
          ) : (
            <input
              type="text"
              value={defaultText}
              onChange={(event) => dispatch(setNewText(event.target.value))}
              onKeyDown={(event) => dispatch(backToView(event))}
            />
          )}
        </div>

        <div id={classes.content}>
          <Stage height="400" width="487" container={classes.content}>
            <Layer>
              <Rect
                x={20}
                y={50}
                width={100}
                height={100}
                fill="red"
                draggable="true"
              />
              <Circle x={200} y={100} radius={50} fill="green" draggable />
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};

export default MainContent;
