import { configureStore } from "@reduxjs/toolkit";
import storesReducer from "../features/storesSlice";
const store = configureStore({
  reducer: {
    stores: storesReducer,
  },
});

export default store;
