import { createSlice } from "@reduxjs/toolkit";

const shapePropertiesSlice = createSlice({
  name: "shape_properties",
  initialState: {
    x: 20,
    y: 20,
    width: 100,
    height: 100,
  },
  reducers: {
    setWidth: (state, action) => {
      const updateWidth = +action.payload;
      return {
        ...state,
        width: updateWidth,
      };
    },
    setHeigh: (state, action) => {
      const updateHeight = +action.payload;
      return {
        ...state,

        height: updateHeight,
      };
    },
    setXAxis: (state, action) => {
      const updateXAxis = +action.payload;
      return {
        ...state,
        x: updateXAxis,
      };
    },
    setYAxis: (state, action) => {
      const updateYAxis = +action.payload;
      return {
        ...state,
        y: updateYAxis,
      };
    },
  },
});

export const { setWidth, setHeigh, setXAxis, setYAxis } =
  shapePropertiesSlice.actions;
export default shapePropertiesSlice.reducer;
