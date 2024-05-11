import { baseApi } from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blogs",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blog"],
    }),

    getAllBlog: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blog"],
    }),

    getSingleBlog: builder.query({
      query: (query) => ({
        url: `/blogs/${query}`,
        method: "GET",
      }),
      providesTags: ["blog"],
    }),

    removeBlog: builder.mutation({
      query: (query) => ({
        url: `/blogs/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetAllBlogQuery,
  useGetSingleBlogQuery,
  useRemoveBlogMutation,
} = blogApi;
