import baseApi from "../../api/baseApi";

const useSaddleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUseSaddles: builder.query({
      query: () => ({
        url: `/used-saddles`,
        method: "GET",
      }),
    }),
    getSingleUseSaddle: builder.query({
      query: (id) => ({
        url: `/used-saddles/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUseSaddlesQuery, useGetSingleUseSaddleQuery } =
  useSaddleApi;

export default useSaddleApi;
