import baseApi from "../../api/baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetAllContact: builder.query({
      query: ({ search, page }) => ({
        url: "/contact-us",
        method: "GET",
        params: {
          search,
          page,
        },
      }),
    }),

    getSingleContact: builder.query({
      query: (id) => ({
        url: `/contact-us/${id}`,
        method: "GET",
      }),
    }),

    // deleteJobApplicant: builder.mutation({
    //   query: (id) => ({
    //     url: `/job-portal/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useGetSingleContactQuery,
  useGetAllContactQuery,
//   useDeleteJobApplicantMutation,
} = contactUsApi;

export default contactUsApi;
