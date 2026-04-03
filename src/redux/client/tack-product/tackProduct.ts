import baseApi from "../../api/baseApi";

const tackProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTackProducts: builder.query({
      query: () => ({
        url: `/tackproduct/user/show-all/TACK`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTackProductsQuery } = tackProductApi;

export default tackProductApi;
