import baseApi from "../../api/baseApi";

const competitionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompetitions: builder.query({
      query: ({ location, discipline }) => ({
        url: `/competitions`,
        method: "GET",
        params: {
          location,
          discipline,
        },
      }),
    }),
  }),
});

export const { useGetCompetitionsQuery } = competitionApi;

export default competitionApi;
