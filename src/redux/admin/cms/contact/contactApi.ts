import baseApi from "../../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContact: builder.query({
      query: ({ search }) => ({
        url: "/contact-infos",
        method: "GET",
        params: {
          search,
        },
      }),
    }),

    updateContact: builder.mutation({
      query: (data) => ({
        url: `/contact-infos`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const { useUpdateContactMutation } = contactApi;

export default contactApi;
