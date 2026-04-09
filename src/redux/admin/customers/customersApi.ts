import baseApi from "../../api/baseApi";

const customersApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCustomers: builder.query<any, any>({
      query: ({ page = 1, limit = 10 } = {}) => ({
        url: "/auth/users",
        method: "GET",
        params: { page, limit },
      }),
    }),
  }),
});

export const { useGetCustomersQuery } = customersApi;

export default customersApi;