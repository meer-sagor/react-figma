import { createSlice } from "@reduxjs/toolkit";

const editableTextSlice = createSlice({
  name: "edit_text",
  initialState: {
    toggle: true,
    defaultText: "meer sagor",
    defaultRectangleText: "rectangle",
  },
  reducers: {
    setToggle: (state) => {
      return {
        ...state,
        toggle: false,
      };
    },
    setNewText: (state, action) => {
      return {
        ...state,
        defaultText: action.payload,
      };
    },
    setRectangleText: (state, action) => {
      return {
        ...state,
        defaultRectangleText: action.payload,
      };
    },
    backToView: (state, action) => {
      if (action.payload.key === "Enter" || action.payload.key === "Escape") {
        action.payload.preventDefault();
        return {
          ...state,
          toggle: true,
        };
      }
    },
  },
});

export const { setToggle, setNewText, setRectangleText, backToView } = editableTextSlice.actions;

export default editableTextSlice.reducer;
