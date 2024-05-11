import { baseApi } from "../../api/baseApi";

const educationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createEducation: builder.mutation({
      query: (data) => ({
        url: "/educations",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["education"],
    }),

    getAllEducation: builder.query({
      query: () => ({
        url: "/educations",
        method: "GET",
      }),
      providesTags: ["education"],
    }),

    getSingleEducation: builder.query({
      query: (query) => ({
        url: `/educations/${query}`,
        method: "GET",
      }),
      providesTags: ["education"],
    }),

    updateEducation: builder.mutation({
      query: ({ id, body }) => ({
        url: `/educations/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ['education'],
    }),

    removeEducation: builder.mutation({
      query: (query) => ({
        url: `/educations/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["education"],
    }),
  }),
});

export const {
  useCreateEducationMutation,
  useGetAllEducationQuery,
  useGetSingleEducationQuery,
  useUpdateEducationMutation,
  useRemoveEducationMutation,
} = educationApi;
