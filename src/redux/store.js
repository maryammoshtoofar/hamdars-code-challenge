import { configureStore } from "@reduxjs/toolkit";
import { unitAPI } from "src/redux/features/api/api-slice";
import chapterReducer from "src/redux/features/chapters/chapters-slice";

export const store = configureStore({
  reducer: {
    [unitAPI.reducerPath]: unitAPI.reducer,
    chapters: chapterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unitAPI.middleware),
});
