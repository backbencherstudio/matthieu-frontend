import baseApi from "../../api/baseApi";

const tackProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTackProducts: builder.query({
      query: () => ({
        url: `/tackproduct/user/show-all/TACK`,
        method: "GET",
      }),
    }),
    getSingleTackProduct: builder.query({
      query: (id) => ({
        url: `/tackproduct/user/product/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTackProductsQuery, useGetSingleTackProductQuery } =
  tackProductApi;

export default tackProductApi;
