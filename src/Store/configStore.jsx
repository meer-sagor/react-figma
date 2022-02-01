import { configureStore } from "@reduxjs/toolkit";

import editableTextReducer from "./EditableText";
import shapesSliceReducer from "./ShapesSlice";
import shapePropertiesSliceReducer from "./ShapePropertiesSlice";

const Store = configureStore({
  reducer: {
    editText: editableTextReducer,
    shapes: shapesSliceReducer,
    properties: shapePropertiesSliceReducer,
  },
});

export default Store;
