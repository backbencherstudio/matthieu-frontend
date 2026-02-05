import baseApi from "../../api/baseApi";

const expertApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getExperts: builder.query({
      query: () => ({
        url: `/experts`,
        method: "GET",
      }),
    }),
    getExpertByCountry: builder.query({
      query: (country) => ({
        url: `/experts/country/${country}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetExpertsQuery, useGetExpertByCountryQuery } = expertApi;

export default expertApi;
