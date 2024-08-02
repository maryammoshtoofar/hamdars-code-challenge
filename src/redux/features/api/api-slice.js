import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, UNIT_URL } from "src/config/api";

export const unitAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // unit
    getAllUnits: builder.query({
      query: () => UNIT_URL,
    }),
  }),
});

export const { useGetAllUnitsQuery } = unitAPI;
