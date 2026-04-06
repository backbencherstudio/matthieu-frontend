import baseApi from "../../api/baseApi";

const tackProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCard: builder.mutation({
      query: (cartData) => ({
        url: `/cart/add`,
        method: "POST",
        body: cartData,
      }),
    }),
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

export const {
  useGetAllTackProductsQuery,
  useGetSingleTackProductQuery,
  useAddToCardMutation,
} = tackProductApi;

export default tackProductApi;
