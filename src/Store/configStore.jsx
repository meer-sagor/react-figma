import { configureStore } from "@reduxjs/toolkit";

import editableTextReducer from "./EditableText";
import rectangleShapeSliceReducer from "./RectangleShapeSlice";

const Store = configureStore({
  reducer: {
    editText: editableTextReducer,
    rectangle: rectangleShapeSliceReducer,
  },
});

export default Store;
