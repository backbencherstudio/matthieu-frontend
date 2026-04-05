import baseApi from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: data,
        };
      },
    }),

    login: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),

    forgotPassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: data,
        };
      },
    }),

    verifyOtp: builder.mutation({
      query: (data) => (console.log(data), {
        url: "/auth/verify-otp",
        method: "POST",
        body: data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => (console.log(data), {
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

  }),
});

export const { useSignupMutation, useLoginMutation, useForgotPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation } = authApi;

export default authApi;
