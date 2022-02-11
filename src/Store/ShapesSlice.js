import { createSlice } from "@reduxjs/toolkit";

const ShapesSlice = createSlice({
  name: "shapes",
  initialState: {
    shapeToggle: true,
    rectangles: [],
    selectedRectangle: {},
    shapePropertiesValue: {
      width: "",
      height: "",
      xAxis: "",
      yAxis: undefined,
      color: "",
    },
  },
  reducers: {
    setShapeToggle: (state) => {
      return {
        ...state,
        shapeToggle: false,
      };
    },
    shapePropertiesValueUpdate: (state, action) => {
      const id = state.selectedRectangle.id;
      const { width, height, x, y, fill } = action.payload;


      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          width: (existingRectangle.width = parseInt(width)),
          height: (existingRectangle.height = parseInt(height)),
          x: (existingRectangle.x = parseInt(x)),
          y: (existingRectangle.y = parseInt(y)),
          fill: (existingRectangle.fill = fill),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },

    setShapeText: (state, action) => {
      const { id, values } = action.payload;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];
      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          name: (existingRectangle.name = values),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },
    backToShape: (state, action) => {
      const keys = action.payload;
      if (keys === "Enter" || keys === "Escape") {
        return {
          ...state,
          shapeToggle: true,
        };
      }
    },


    setDragEndPosition: (state, action) => {
      const { xAxis, yAxis, rectangle } = action.payload;

      const id = rectangle.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          x: (existingRectangle.x = xAxis),
          y: (existingRectangle.y = yAxis),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },

    addRectangle: (state, action) => {
      state.rectangles.push(action.payload);
    },
    getRectangleItem: (state, action) => {
      const item = action.payload;
      return {
        ...state,
        selectedRectangle: item,
      };
    },
  },
});

export const {
  setShapeToggle,
  setShapeText,
  backToShape,
  addRectangle,
  getRectangleItem,
  setDragEndPosition,
  shapePropertiesValueUpdate,
} = ShapesSlice.actions;

export default ShapesSlice.reducer;
