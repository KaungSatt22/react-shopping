import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const shopping = createApi({
  reducerPath: "shopping",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => "products",
    }),
    getSingleData: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllDataQuery, useGetSingleDataQuery } = shopping;
