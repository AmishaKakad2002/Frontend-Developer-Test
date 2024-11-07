import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    postsData: null,
  },
  reducers: {
    addpostsData: (state, action) => {
      state.postsData = action.payload;
    }
  },
});

export const {
    addpostsData
} = postsSlice.actions;
export default postsSlice.reducer;
