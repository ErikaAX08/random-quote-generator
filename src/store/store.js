import { configureStore } from "@reduxjs/toolkit";
import { quoteApi } from "./api/quoteApi";
import quoteReducer from "./slices/quoteSlice";
import quotesReducer from "./slices/quotesSlice";

const store = configureStore({
  reducer: {
    [quoteApi.reducerPath]: quoteApi.reducer,
    quote: quoteReducer,
    quotes: quotesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(quoteApi.middleware),
});

export default store;
