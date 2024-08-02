import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chapters: [],
  name: "",
};
const chaptersSlice = createSlice({
  name: "chapters",
  initialState: initialState,
  reducers: {
    setChapters(state, action) {
      state.chapters = action.payload.chapters;
      state.name = action.payload.name;
    },
  },
});

export const { setChapters } = chaptersSlice.actions;
export default chaptersSlice.reducer;
