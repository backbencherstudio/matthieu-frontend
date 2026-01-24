import baseApi from "../../../api/baseApi";

const arionTeamApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    showAllMember: builder.query({
      query: ({ search }) => ({
        url: "/team",
        method: "GET",
        params: {
          search,
        },
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

export const { useShowAllMemberQuery, useDeleteArionMemberMutation } =
  arionTeamApi;

export default arionTeamApi;
