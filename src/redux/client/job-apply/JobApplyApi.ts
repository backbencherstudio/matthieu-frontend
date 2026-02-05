import baseApi from "../../api/baseApi";

const JobApplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    jobApply: builder.mutation({
      query: (data) => ({
        url: `/job-portal`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useJobApplyMutation } = JobApplyApi;

export default JobApplyApi;
