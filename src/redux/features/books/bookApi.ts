import { api } from "@/redux/api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (page = 1) => `books?page=${page}`,
      providesTags: ["books"],
    }),

    getWishlist: builder.query({
      query: () => `wishlist`,
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
    updateWishlist: builder.mutation({
      query: ({ id, data }) => ({
        url: `wishlist/${id}`,
        method: "PATCH",
        body: data,
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
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    addReview: builder.mutation({
      query: ({ id, review }) => ({
        url: `books/review/${id}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: ["books"],
    }),

    addToWishlist: builder.mutation({
      query: (data) => ({
        url: `wishlist`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  useDeleteBookMutation,
  useAddBookMutation,
  useEditBookMutation,
  useAddReviewMutation,
  useAddToWishlistMutation,
  useGetWishlistQuery,
  useUpdateWishlistMutation,
} = bookApi;
