import baseApi from "../../api/baseApi";

const useSaddleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSaddles: builder.query({
      query: () => ({
        url: `/sadlles`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSaddlesQuery } = useSaddleApi;

export default useSaddleApi;
