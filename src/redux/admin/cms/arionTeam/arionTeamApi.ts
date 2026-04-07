import baseApi from "../../../api/baseApi";

const arionTeamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: "/team",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Allmember"]
    }),

    showAllMember: builder.query({
      query: ({ search, page }) => ({
        url: "/team",
        method: "GET",
        params: {
          search,
          page,
        },
      }),
      providesTags: ['Allmember']
    }),

    updateArionMember: builder.mutation({
      query: ({ id, data }) => ({
        url: `/team/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteArionMember: builder.mutation({
      query: (id) => ({
        url: `/team/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useShowAllMemberQuery,
  useDeleteArionMemberMutation,
  useCreateMutation,
  useUpdateArionMemberMutation,
} = arionTeamApi;

export default arionTeamApi;
