import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  stores: [
    {
      id: 1,
      name: "gayatri",
      area: "pune",
      category: "chemist",
      openDate: "2022-05-12",
      closeDate: "2022-05-30",
    },
    {
      id: 2,
      name: "ayush ki",
      area: "pune",
      category: "chemist",
      openDate: "2022-05-12",
      closeDate: "2022-05-15",
    },
  ],
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    add(state, action) {
      state.stores.push({ id: state.stores.length + 1, ...action.payload });
      return state;
    },
    remove(state, action) {
      state.stores = state.stores.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

export const { add, remove } = storesSlice.actions;

export default storesSlice.reducer;
