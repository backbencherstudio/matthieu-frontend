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

    deleteSaddleAlert: builder.mutation({
      query: (id) => ({
        url: `/saddle-alert/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllSaddleAlertQuery, useDeleteSaddleAlertMutation } =
  saddleAlertApi;

export default saddleAlertApi;
