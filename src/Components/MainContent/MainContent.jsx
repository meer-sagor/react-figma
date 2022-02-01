import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stage, Layer, Rect, Circle } from "react-konva";
import Input from "../UI/Input";
import { setToggle, setNewText, backToView } from "../../Store/EditableText";

import classes from "./MainContent.module.css";
const MainContent = () => {
  const { toggle, defaultText } = useSelector((state) => state.editText);
  const { rectangle, circle } = useSelector((state) => state.shapes);
  const { x, y, width, height } = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes["main-content"]}>
        <div className={classes["main-content__title"]}>
          {toggle ? (
            <h3 onDoubleClick={() => dispatch(setToggle())}>{defaultText}</h3>
          ) : (
            <Input
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
              {rectangle.rectangles.map((rectangle) => (
                <Rect
                  key={rectangle.id}
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={rectangle.fill}
                  draggable
                />
              ))}
              {circle.circles.map((cir) => (
                // console.log(cir)
                <Circle
                  x={cir.x}
                  y={cir.y}
                  radius={cir.radius}
                  fill={cir.fill}
                  draggable
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>
    </>
  );
};

export default MainContent;
