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

    deleteSaddleProduct: builder.mutation({
      query: (id) => ({
        url: `/sadlles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SaddleProduct"],
    }),
  }),
});

export const { useGetSaddleProductsQuery, useDeleteSaddleProductMutation } =
  SaddleProductApi;

export default SaddleProductApi;
