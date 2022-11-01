import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gamesList: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    pullGames: (state, action) => {
      state.gamesList = [...state.gamesList, action.payload];
    },
    emptyArray: (state) => {
      state.gamesList = [];
    },
  },
});

export const { pullGames, emptyArray, gamesList } = searchSlice.actions;

export default searchSlice.reducer;
