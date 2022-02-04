import { createSlice } from "@reduxjs/toolkit";

const editableTextSlice = createSlice({
  name: "edit_text",
  initialState: {
    toggle: true,
    defaultText: "meer sagor",
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
    backToView: (state, action) => {
      if (action.payload === "Enter" || action.payload === "Escape") {
        return {
          ...state,
          toggle: true,
        };
      }
    },
  },
});

export const { setToggle, setNewText,  backToView } =
  editableTextSlice.actions;

export default editableTextSlice.reducer;
