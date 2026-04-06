import baseApi from "../../api/baseApi";

const useSaddleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSaddles: builder.query({
      query: () => ({
        url: `/sadlles`,
        method: "GET",
      }),
    }),
    getSingleSaddle: builder.query({
      query: ({ id }) => ({
        url: `/sadlles/${id}`,
        method: "GET",
      }),
    }),
    getLeadLineSaddle: builder.query({
      query: () => ({
        url: `/sadlles/leadline/product`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllSaddlesQuery,
  useGetSingleSaddleQuery,
  useGetLeadLineSaddleQuery,
} = useSaddleApi;

export default useSaddleApi;
