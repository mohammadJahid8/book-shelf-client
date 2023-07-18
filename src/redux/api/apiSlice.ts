import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { RootState } from "../store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    prepareHeaders: (headers, { getState }) => {
      console.log(
        "inside prepare headers",
        getState() as RootState,
        localStorage.getItem("token")
      );
      const token =
        (getState() as RootState).auth.token || localStorage.getItem("token");
      console.log("token from api slice", token);
      if (token) {
        console.log("inside");
        headers.set("Authorization", `${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["books", "user"],
  endpoints: () => ({}),
});
