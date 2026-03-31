import baseApi from "../../api/baseApi";

const savedProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({



      // ✅ GET saved products
    getSavedProducts: builder.query<any, void>({
      query: () => "/saved-product",
    }),


  }),
});

export const {useGetSavedProductsQuery } = savedProductApi;

export default savedProductApi;
