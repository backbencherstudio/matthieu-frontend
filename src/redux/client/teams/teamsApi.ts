import baseApi from "../../api/baseApi";

const teamsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTeams: builder.query({
      query: () => ({
        url: `/team`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTeamsQuery } = teamsApi;

export default teamsApi;
