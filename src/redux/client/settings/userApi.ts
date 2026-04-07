
import baseApi from "../../api/baseApi";

const userApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getUser: builder.query<any, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
export default userApi;