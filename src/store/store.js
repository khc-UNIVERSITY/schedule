// libs
import { configureStore } from "@reduxjs/toolkit";

// slices
import themeSlice from './slices/themeSlice.slice.js';
import settingsSlice from './slices/settingsSlice.slice.js';

const store = configureStore({
  reducer: {
    themeSlice,
    settingsSlice,
  },
});

export default store;