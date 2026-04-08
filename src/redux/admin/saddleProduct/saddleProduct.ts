import baseApi from "../../api/baseApi";

const SaddleProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (formData) => ({
        url: "/sadlles/admin",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["SaddleProduct"],
    }),

    getSaddleProducts: builder.query({
      query: () => ({
        url: "/sadlles/admin/all-saddles",
        method: "GET",
      }),
      providesTags: ["SaddleProduct"],
    }),

    deleteSaddleProduct: builder.mutation({
      query: (id) => ({
        url: `/sadlles/admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SaddleProduct"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetSaddleProductsQuery,
  useDeleteSaddleProductMutation,
} = SaddleProductApi;

export default SaddleProductApi;
