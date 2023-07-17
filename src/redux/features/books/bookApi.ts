import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (page = 1) => `books?page=${page}`,
    }),
    singleBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    // postComment: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/comment/${id}`,
    //     method: 'POST',
    //     body: data,
    //   }),
    //   invalidatesTags: ['comment'],
    // }),
    // getComment: builder.query({
    //   query: (id) => `comment/${id}`,
    //   providesTags: ['comment'],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  //   usePostCommentMutation,
  //   useGetCommentQuery,
} = bookApi;
