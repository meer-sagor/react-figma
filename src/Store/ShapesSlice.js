import { createSlice } from "@reduxjs/toolkit";

const ShapesSlice = createSlice({
  name: "shapes",
  initialState: {
    shapeToggle: true,
    rectangles: [],
    circles: [],
    triangles: [],
    selectedItem: {},
    shapeRectanglePropertiesValue: {},
    shapeCirclePropertiesValue: {},
    shapeTrianglePropertiesValue: {},
  },
  reducers: {
    setShapeToggle: (state) => {
      return {
        ...state,
        shapeToggle: false,
      };
    },
    shapeRectanglePropertiesValueUpdate: (state, action) => {
      const id = state.selectedItem.id;
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
    shapeCirclePropertiesValueUpdate: (state, action) => {
      console.log(action.payload);
      // const id = state.selectedItem.id;
      // const { width, height, x, y, fill } = action.payload;

      // const existingRectangleIndex = state.rectangles.findIndex(
      //   (rectangleIndex) => rectangleIndex.id === id
      // );
      // const existingRectangle = state.rectangles[existingRectangleIndex];

      // if (existingRectangle) {
      //   let updatedRectangle = {
      //     ...existingRectangle,
      //     width: (existingRectangle.width = parseInt(width)),
      //     height: (existingRectangle.height = parseInt(height)),
      //     x: (existingRectangle.x = parseInt(x)),
      //     y: (existingRectangle.y = parseInt(y)),
      //     fill: (existingRectangle.fill = fill),
      //   };
      //   let updatedRectangles = [...state.rectangles];
      //   updatedRectangles[existingRectangleIndex] = updatedRectangle;
      // }
      // return;
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
      const { xAxis, yAxis, rect } = action.payload;

      const id = rect.id;
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
    addCircle: (state, action) => {
      state.circles.push(action.payload);
    },
    addTriangle: (state, action) => {
      state.triangles.push(action.payload);
    },
    getShapeItem: (state, action) => {
      const item = action.payload;
      return {
        ...state,
        selectedItem: item,
      };
    },
  },
});

export const {
  setShapeToggle,
  setShapeText,
  backToShape,
  addRectangle,
  addCircle,
  addTriangle,
  getShapeItem,
  setDragEndPosition,
  shapeRectanglePropertiesValueUpdate,
  shapeCirclePropertiesValueUpdate
} = ShapesSlice.actions;

export default ShapesSlice.reducer;
