import baseApi from "../../api/baseApi";

const jobApplicantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobApplicant: builder.query({
      query: ({ search, page }) => ({
        url: "/job-portal",
        method: "GET",
        params: {
          search,
          page,
        },
      }),
    }),

    getSingleJobApplicant: builder.query({
      query: (id) => ({
        url: `/job-portal/${id}`,
        method: "GET",
      }),
    }),

    deleteJobApplicant: builder.mutation({
      query: (id) => ({
        url: `/job-portal/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSingleJobApplicantQuery,
  useGetAllJobApplicantQuery,
  useDeleteJobApplicantMutation,
} = jobApplicantApi;

export default jobApplicantApi;
