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
    setShapeToggle: (state, action) => {
      const id = action.payload.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          toggle: (existingRectangle.toggle = false),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },
    backToShape: (state, action) => {
      const { keys, rect } = action.payload;
      if (keys === "Enter" || keys === "Escape") {
        const id = rect.id;
        const existingRectangleIndex = state.rectangles.findIndex(
          (rectangleIndex) => rectangleIndex.id === id
        );
        const existingRectangle = state.rectangles[existingRectangleIndex];

        if (existingRectangle) {
          let updatedRectangle = {
            ...existingRectangle,
            toggle: (existingRectangle.toggle = true),
          };
          let updatedRectangles = [...state.rectangles];
          updatedRectangles[existingRectangleIndex] = updatedRectangle;
        }
        return;
      }
    },
    shapePropertiesValueUpdate: (state, action) => {
      const id = state.selectedItem.id;
      const { width, height, x, y, fill } = action.payload.value;

      const existingShapeIndex = state[action.payload.shapeType].findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingShape =
        state[action.payload.shapeType][existingShapeIndex];

      if (existingShape) {
        let updatedRectangle = {
          ...existingShape,
          width: (existingShape.width = parseInt(width)),
          height: (existingShape.height = parseInt(height)),
          x: (existingShape.x = parseInt(x)),
          y: (existingShape.y = parseInt(y)),
          fill: (existingShape.fill = fill),
        };
        let updatedShapes = [...state[action.payload.shapeType]];
        updatedShapes[existingShapeIndex] = updatedRectangle;
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
  shapePropertiesValueUpdate,
} = ShapesSlice.actions;

export default ShapesSlice.reducer;
