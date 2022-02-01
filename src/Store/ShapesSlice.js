import { createSlice } from "@reduxjs/toolkit";

const shapesSlice = createSlice({
  name: "shapes",
  initialState: {
    rectangle: { rectangles: [] },
    circle: { circles: [] },
    triangle: { triangles: [] },
  },
  reducers: {
    addRectangle: (state, action) => {
      state.rectangle.rectangles.push(action.payload);
    },
    addCircle: (state, action) => {
      state.circle.circles.push(action.payload);
    },
    addTriangle: (state, action) => {
      state.triangle.triangles.push(action.payload);
    },
  },
});

export const { addRectangle, addCircle, addTriangle } = shapesSlice.actions;

export default shapesSlice.reducer;
