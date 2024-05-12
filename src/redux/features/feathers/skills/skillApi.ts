import { baseApi } from "../../api/baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSkill: builder.mutation({
      query: (data) => ({
        url: "/skills",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skill"],
    }),

    getAllSkill: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["skill"],
    }),

    getSingleSkill: builder.query({
      query: (query) => ({
        url: `/skills/${query}`,
        method: "GET",
      }),
    }),
    updateSkill: builder.mutation({
      query: ({ id, body }) => ({
        url: `/skills/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["skill"],
    }),
    removeSkill: builder.mutation({
      query: (query) => ({
        url: `/skills/${query}`,
        method: "DELETE",
      }),
      invalidatesTags: ["skill"],
    }),
  }),
});

export const {
  useCreateSkillMutation,
  useGetAllSkillQuery,
  useGetSingleSkillQuery,
  useUpdateSkillMutation,
  useRemoveSkillMutation,
} = skillApi;
