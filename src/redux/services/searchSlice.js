import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openBar: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    activeBar: (state, action) => {
      state.openBar = action.payload;
    },
  },
});

export const { activeBar } = searchSlice.actions;

export default searchSlice.reducer;
