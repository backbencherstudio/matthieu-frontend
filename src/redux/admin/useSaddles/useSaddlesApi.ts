import baseApi from "../../api/baseApi";

const useSaddlesAdminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUseSadlesAdmin: builder.mutation({
      query: (formData) => ({
        url: "/used-saddles",
        method: "POST",
        body: formData,
      }),
    }),

    getAllUseSadlesAdmin: builder.query({
      query: () => ({
        url: "/used-saddles/admin/all",
        method: "GET",
      }),
    }),

    getSingleUseSadlesAdmin: builder.query({
      query: (id) => ({
        url: `/used-saddles/admin/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUseSadlesAdminMutation,
  useGetAllUseSadlesAdminQuery,
  useGetSingleUseSadlesAdminQuery,
} = useSaddlesAdminApi;

export default useSaddlesAdminApi;
