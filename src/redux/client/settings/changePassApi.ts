import baseApi from "../../api/baseApi";

const changePassApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    changePassword: builder.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const { useChangePasswordMutation } = changePassApi;

export default changePassApi;