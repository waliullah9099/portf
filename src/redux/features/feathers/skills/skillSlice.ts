import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
};
const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {},
});

export default skillSlice.reducer;
