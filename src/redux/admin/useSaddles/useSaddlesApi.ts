import baseApi from "../../api/baseApi";

const useSaddlesAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUseSadlesAdmin: builder.mutation({
      query: (formData) => ({
        url: "/used-saddles",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["UseSaddle"],
    }),

    getAllUseSadlesAdmin: builder.query({
      query: () => ({
        url: "/used-saddles/admin/all",
        method: "GET",
      }),
      providesTags: ["UseSaddle"],
    }),

    getSingleUseSadlesAdmin: builder.query({
      query: (id) => ({
        url: `/used-saddles/admin/${id}`,
        method: "GET",
      }),
    }),

    deleteUseSaddle: builder.mutation({
      query: (id) => ({
        url: `/used-saddles/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateUseSadlesAdminMutation,
  useGetAllUseSadlesAdminQuery,
  useGetSingleUseSadlesAdminQuery,
  useDeleteUseSaddleMutation,
} = useSaddlesAdminApi;

export default useSaddlesAdminApi;
