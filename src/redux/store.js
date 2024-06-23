// store.js
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlide";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
