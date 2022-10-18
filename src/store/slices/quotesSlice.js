import { createSlice } from "@reduxjs/toolkit";

export const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    data: [],
    state: "loading",
  },
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
    setQuotes: (state, action) => {
      state.data = action.payload
    }
  },
});

export const { setState, setQuotes } = quotesSlice.actions;

export default quotesSlice.reducer;
