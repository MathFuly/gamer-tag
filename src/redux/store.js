import { configureStore } from "@reduxjs/toolkit";

import { gamesCoreApi } from "./services/gamesCore";
import searchReducer from "./services/searchSlice";
import ssReducer from "./services/ssSlice";

export const store = configureStore({
  reducer: {
    [gamesCoreApi.reducerPath]: gamesCoreApi.reducer,
    search: searchReducer,
    ss: ssReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gamesCoreApi.middleware),
});
