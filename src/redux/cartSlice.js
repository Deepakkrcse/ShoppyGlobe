import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    search: "",
  },
  reducers: {},
});

export default cartSlice.reducer;