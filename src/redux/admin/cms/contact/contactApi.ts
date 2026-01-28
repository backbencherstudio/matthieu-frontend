import baseApi from "../../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleContact: builder.query({
      query: () => ({
        url: `/contact-infos`,
        method: "GET",
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

export const { useUpdateContactMutation, useGetSingleContactQuery } =
  contactApi;

export default contactApi;
