import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stage, Layer, Rect } from "react-konva";
import Rectangle from "../Shape/Rectangle/Rectangle";

import Input from "../UI/Input";
import { setToggle, setNewText, backToView } from "../../Store/EditableText";
import { setDragEndPosition } from "../../Store/ShapesSlice";

import classes from "./MainContent.module.css";
import Properties from "../Properties/Properties";

const MainContent = () => {
  const { toggle, defaultText } = useSelector((state) => state.editText);
  const { rectangles } = useSelector((state) => state.shapes);
  const [selectedId, selectShape] = useState(null);
  const stageRef = useRef(null);

  const dispatch = useDispatch();


  const downloadURL = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handlerExport = (event) => {
    const innerText = event.target.innerText;
    let url;
    if (innerText === "PNG") {
      url = stageRef.current.toDataURL();
      downloadURL(url, `${defaultText}.png`);
    } else if (innerText === "JPG") {
      url = stageRef.current.toDataURL();
      downloadURL(url, `${defaultText}.png`);
    }
  };

  const onChangeHandler = (event) => {
    const values = event.target.value;
    dispatch(setNewText(values));
  };
  const onKeyDownHandler = (event) => {
    const keys = event.key;
    dispatch(backToView(keys));
  };

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
              onChange={onChangeHandler}
              onKeyDown={onKeyDownHandler}
            />
          )}
        </div>

        <div id={classes.content}>
          <Stage
            height={400}
            width={555}
            container={classes.content}
            ref={stageRef}
          >
            <Layer>
              {/* {rectangles.map((rectangle) => (
                <Rect
                  key={rectangle.id}
                  name={rectangle.name}
                  x={rectangle.x}
                  y={rectangle.y}
                  width={rectangle.width}
                  height={rectangle.height}
                  fill={rectangle.fill}
                  draggable
                  onDragEnd={(event) => {
                    const xAxis = event.target.x();
                    const yAxis = event.target.y();
                    const axis = {
                      xAxis,
                      yAxis,
                      rectangle
                    };
                    dispatch(setDragEndPosition(axis));
                  }}
                />
              ))} */}

              {rectangles.map((rect, i) => {
                return (
                  <Rectangle
                    key={rect.id}
                    shapeProps={rect}
                    isSelected={rect.id === selectedId}
                    onSelect={() => {
                      selectShape(rect.id);
                    }}
                    onChange={(newAttrs) => {
                      const rects = rectangles.slice();
                      rects[i] = newAttrs;
                      // setRectangles(rects);
                      // console.log(rects);
                      // dispatch(updateRectangleProperties(rects));
                    }}
                  />
                );
              })}
            </Layer>
          </Stage>
        </div>
      </div>
      <Properties handlerExport={handlerExport} />
    </>
  );
};

export default MainContent;
