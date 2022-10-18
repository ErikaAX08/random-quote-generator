import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quoteApi = createApi({
  reducerPath: "quoteApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://quote-garden.herokuapp.com/api/v3",
  }),
  endpoints: (builder) => ({
    getRandomQuote: builder.query({
      query: () => "quotes/random",
    }),
    getAuthorQuotes: builder.query({
      query: (name) => `quotes?author=${name}`
    })
  }),
});

export const { useGetRandomQuoteQuery, useGetAuthorQuotesQuery } = quoteApi;
