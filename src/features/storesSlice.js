import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "gayatri",
    area: "pune",
    category: "chemist",
    openDate: "2022-05-12",
    closeDate: "2022-05-30",
  },
  {
    name: "ayush ki",
    area: "pune",
    category: "chemist",
    openDate: "2022-05-12",
    closeDate: "2022-05-30",
  },
];

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      return state;
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = storesSlice.actions;

export default storesSlice.reducer;
