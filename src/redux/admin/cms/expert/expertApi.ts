import baseApi from "../../../api/baseApi";

const expertApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createExperts: builder.mutation({
      query: (data) => ({
        url: "/experts",
        method: "POST",
        body: data,
      }),
    }),

    getAllExperts: builder.query({
      query: ({ search }) => ({
        url: "/experts",
        method: "GET",
        params: {
          search,
        },
      }),
    }),

    updateExperts: builder.mutation({
      query: ({ id, data }) => ({
        url: `/experts/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteExperts: builder.mutation({
      query: (id) => ({
        url: `/experts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useCreateExpertsMutation } = expertApi;

export default expertApi;
