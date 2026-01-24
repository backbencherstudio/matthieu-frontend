import baseApi from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => {
        return {
          url: "/auth/register",
          method: "POST",
          body: userData,
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
  }),
});

export const { useLoginMutation } = authApi;

export default authApi;
