import { api } from "@/redux/api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    userSignup: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useUserSignupMutation } = userApi;
