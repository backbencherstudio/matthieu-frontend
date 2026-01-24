import baseApi from "../../../api/baseApi";

const ambassadorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (data) => ({
        url: "/ambassador",
        method: "POST",
        body: data,
      }),
    }),

    getAll: builder.query({
      query: ({ search }) => ({
        url: "/ambassador",
        method: "GET",
        params: {
          search,
        },
      }),
    }),

    update: builder.mutation({
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

export const { useGetAllQuery, useDeleteAmbassadorMutation } = ambassadorApi;

export default ambassadorApi;
