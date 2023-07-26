import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-shelf-server-one.vercel.app/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      console.log(token);
      const localToken = JSON.parse(localStorage.getItem("user") || "{}");

      headers.set("Authorization", `${token || localToken.token}`);

      return headers;
    },
  }),
  tagTypes: ["books", "user"],
  endpoints: () => ({}),
});
