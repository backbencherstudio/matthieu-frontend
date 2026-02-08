import baseApi from "../../api/baseApi";

const useSaddlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUseSadles: builder.query({
      query: () => ({
        url: "/used-saddles",
        method: "GET",
      }),
    }),
    getSingleUseSadles: builder.query({
      query: (id) => ({
        url: `/used-saddles/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUseSadlesQuery, useGetSingleUseSadlesQuery } =
  useSaddlesApi;

export default useSaddlesApi;
