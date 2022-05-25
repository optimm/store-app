import { createSlice } from "@reduxjs/toolkit";
// reducers
const initialState = {
  stores: [
    {
      id: 1,
      name: "Aakash General Store",
      area: "pune",
      category: "chemist",
      openDate: "2022-05-12",
      closeDate: "2022-05-30",
    },
    {
      id: 2,
      name: "Vinod Medical Store",
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
    update(state, action) {
      state.stores = state.stores.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...action.payload.data };
        }
        return item;
      });
      return state;
    },
  },
});

export const { add, remove, update } = storesSlice.actions;

export default storesSlice.reducer;
