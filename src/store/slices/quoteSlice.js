import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    data: {},
    state: "loading",
  },
  reducers: {

    setQuote: (state, action) => {
      state.data = action.payload;
    },
    
    setState: (state, action) => {
      state.state = action.payload;
    },
  
  },
});

export const { setQuote, setState } = quoteSlice.actions;

export default quoteSlice.reducer;
