import baseApi from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    getContactInfo: builder.query<any, void>({
      query: () => ({
        url: "/auth/contact-info",
        method: "GET",
      }),
    }),



    contact: builder.mutation({
      query: (data) => ({
        url: `/contact-us`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useContactMutation , useGetContactInfoQuery} = contactApi;

export default contactApi;
