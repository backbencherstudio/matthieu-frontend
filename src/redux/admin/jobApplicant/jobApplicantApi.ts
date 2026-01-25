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

    deleteJobApplicant: builder.mutation({
      query: (id) => ({
        url: `/job-portal/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllJobApplicantQuery, useDeleteJobApplicantMutation } =
  jobApplicantApi;

export default jobApplicantApi;
