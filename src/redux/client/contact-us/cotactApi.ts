import baseApi from "../../api/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    getContactInfo: builder.query<any, void>({
      query: () => ({
        url: "/auth/contact-info",
        method: "GET",
      }),
       providesTags: ["Contact"],
    }),



        updateAddress: builder.mutation({
      query: (data) => ({
        url: "/auth/update-address",
        method: "PATCH", 
        body: data,
      }),
     invalidatesTags: ["Contact"],
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

export const {useContactMutation , useUpdateAddressMutation, useGetContactInfoQuery} = contactApi;

export default contactApi;
