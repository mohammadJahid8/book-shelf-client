import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (page = 1) => `books?page=${page}`,
      providesTags: ["books"],
    }),
    singleBook: builder.query({
      query: (id) => `books/${id}`,
      providesTags: ["books"],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    // getComment: builder.query({
    //   query: (id) => `comment/${id}`,
    //   providesTags: ['comment'],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  useAddBookMutation,
  //   useGetCommentQuery,
} = bookApi;
