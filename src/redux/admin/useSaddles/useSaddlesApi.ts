import baseApi from "../../api/baseApi";

const useSaddlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUseSadles: builder.mutation({
      query: (formData) => ({
        url: "/used-saddles",
        method: "POST",
        body: formData,
      }),
    }),

    getAllUseSadles: builder.query({
      query: () => ({
        url: "/used-saddles/admin/all",
        method: "GET",
      }),
    }),

    getSingleUseSadles: builder.query({
      query: (id) => ({
        url: `/used-saddles/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateUseSadlesMutation,
  useGetAllUseSadlesQuery,
  useGetSingleUseSadlesQuery,
} = useSaddlesApi;

export default useSaddlesApi;
