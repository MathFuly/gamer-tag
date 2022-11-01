import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vizualize: {open: false, image:''}
};

const ssSlice = createSlice({
  name: "ss",
  initialState,
  reducers: {
    setVizualize: (state, action) => {
      state.vizualize.open = action.payload.open;
      state.vizualize.image = action.payload.image;
    },
  },
});

export const { setVizualize, vizualize } = ssSlice.actions;

export default ssSlice.reducer;
