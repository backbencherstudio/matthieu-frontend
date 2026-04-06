import baseApi from "@/src/redux/api/baseApi";

const updateProfileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      query: (payload) => ({
        url: "/auth/update",
        method: "PATCH",
        body: payload,
      }),
    }),
  }),
});

export const { useUpdateProfileMutation } = updateProfileApi;

export default updateProfileApi;