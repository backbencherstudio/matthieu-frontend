import baseApi from "../../api/baseApi";

const saddleAlertApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSaddleAlert: builder.query({
      query: ({ search, page }) => ({
        url: "/saddle-alert",
        method: "GET",
        params: {
          search,
          page,
        },
      }),
    }),

    getSingleSaddleAlert: builder.query({
      query: (id) => ({
        url: `/saddle-alert/${id}`,
        method: "GET",
      }),
    }),

    deleteSaddleAlert: builder.mutation({
      query: (id) => ({
        url: `/saddle-alert/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllSaddleAlertQuery,
  useGetSingleSaddleAlertQuery,
  useDeleteSaddleAlertMutation,
} = saddleAlertApi;

export default saddleAlertApi;
