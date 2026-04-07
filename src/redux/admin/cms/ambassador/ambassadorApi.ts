import baseApi from "../../../api/baseApi";

const ambassadorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAmbassador: builder.mutation({
      query: (data) => ({
        url: "/ambassador",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Ambassador"]
    }),

    getAll: builder.query({
      query: ({ search, page }) => ({
        url: "/ambassador",
        method: "GET",
        params: {
          search,
          page,
        },
      }),
      providesTags: ['Ambassador']
    }),

    updateAmbassador: builder.mutation({
      query: ({ id, data }) => ({
        url: `/ambassador/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteAmbassador: builder.mutation({
      query: (id) => ({
        url: `/ambassador/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateAmbassadorMutation,
  useGetAllQuery,
  useUpdateAmbassadorMutation,
  useDeleteAmbassadorMutation,
} = ambassadorApi;

export default ambassadorApi;
