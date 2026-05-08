// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import themeSlice from './slices/themeSlice.slice.js';

const store = configureStore({
  reducer: {
    themeSlice,
  },
});

export default store;