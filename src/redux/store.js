import { configureStore } from "@reduxjs/toolkit";

import { gamesCoreApi } from "./services/gamesCore";
import searchReducer from "./services/searchSlice";

export const store = configureStore({
  reducer: {
    [gamesCoreApi.reducerPath]: gamesCoreApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesCoreApi.middleware),
});
