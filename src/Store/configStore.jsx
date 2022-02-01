import { configureStore } from "@reduxjs/toolkit";

import editableTextReducer from "./EditableText";

const Store = configureStore({
  reducer: {
    editText: editableTextReducer,
  },
});

export default Store;
