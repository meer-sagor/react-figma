import { createSlice } from "@reduxjs/toolkit";

const rectangleShapeSlice = createSlice({
  name: "shapes",
  initialState: {
    shapeToggle: true,
    rectangles: [],
    selectedRectangle: {},
  },
  reducers: {
    setShapeToggle: (state, action) => {
      return {
        ...state,
        shapeToggle: false,
      };
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
      // const { keys, rect } = action.payload;
      // const { id } = rect;
      // const existingRectangleIndex = state.rectangles.findIndex(
      //   (rectangleIndex) => rectangleIndex.id === id
      // );
      // const existingRectangle = state.rectangles[existingRectangleIndex];

      // if (existingRectangle ) {
      //     let updatedRectangle = {
      //       ...existingRectangle,
      //       toggle: (existingRectangle.toggle = false),
      //     };
      //     let updatedRectangles = [...state.rectangles];
      //     updatedRectangles[existingRectangleIndex] = updatedRectangle;
      //   }
      //   return;
      // if (keys === "Enter" || keys === "Escape") {
      //   let updatedRectangle = {
      //     ...existingRectangle,
      //     toggle: (existingRectangle.toggle = false),
      //   };
      //   let updatedRectangles = [...state.rectangles];
      //   updatedRectangles[existingRectangleIndex] = updatedRectangle;
      // }

      if (action.payload === "Enter" || action.payload === "Escape") {
        return {
          ...state,
          shapeToggle: true,
        };
      }
    },

    setRectangleWidth: (state, action) => {
      const newWidth = action.payload;
      const id = state.selectedRectangle.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          width: (existingRectangle.width = newWidth),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },
    setRectangleHeight: (state, action) => {
      const newHeight = action.payload;
      const id = state.selectedRectangle.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          height: (existingRectangle.height = newHeight),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },

    setRectangleXAxis: (state, action) => {
      const newXAxis = action.payload;
      const id = state.selectedRectangle.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          x: (existingRectangle.x = newXAxis),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },

    setRectangleYAxis: (state, action) => {
      const newYAxis = action.payload;
      const id = state.selectedRectangle.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          y: (existingRectangle.y = newYAxis),
        };
        let updatedRectangles = [...state.rectangles];
        updatedRectangles[existingRectangleIndex] = updatedRectangle;
      }
      return;
    },
    setRectangleColor: (state, action) => {
      const newColor = action.payload;
      const id = state.selectedRectangle.id;
      const existingRectangleIndex = state.rectangles.findIndex(
        (rectangleIndex) => rectangleIndex.id === id
      );
      const existingRectangle = state.rectangles[existingRectangleIndex];

      if (existingRectangle) {
        let updatedRectangle = {
          ...existingRectangle,
          fill: (existingRectangle.fill = newColor),
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
  setRectangleWidth,
  setRectangleHeight,
  setRectangleXAxis,
  setRectangleYAxis,
  setRectangleColor,
} = rectangleShapeSlice.actions;

export default rectangleShapeSlice.reducer;
