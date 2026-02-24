import baseApi from "../../api/baseApi";

const SaddleProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSaddleProducts: builder.query({
      query: () => ({
        url: "/sadlles",
        method: "GET",
      }),
      providesTags: ["SaddleProduct"],
    }),
  }),
});

export const { useGetSaddleProductsQuery } = SaddleProductApi;

export default SaddleProductApi;
