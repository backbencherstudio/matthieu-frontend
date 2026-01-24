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
  }),
});

export const { useShowAllMemberQuery } = arionTeamApi;

export default arionTeamApi;
