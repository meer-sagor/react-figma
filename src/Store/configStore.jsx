import { configureStore } from "@reduxjs/toolkit";

import editableTextReducer from "./EditableText";
import ShapesSliceReducer from "./ShapesSlice";

const Store = configureStore({
  reducer: {
    editText: editableTextReducer,
    shapes: ShapesSliceReducer,
  },
});

export default Store;
