import baseApi from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: `/contact-us`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useContactMutation} = contactApi;

export default contactApi;
