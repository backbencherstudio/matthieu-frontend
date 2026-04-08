import baseApi from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentStats: builder.query({
      query: () => ({
        url: "/payment/stats",
        method: "GET",
      }),
    }),
    getAllPayments: builder.query({
      query: ({ search, page, status, duration }) => ({
        url: "/payment/transactions",
        method: "GET",
        params: {
          search,
          page,
          status,
          duration,
        },
      }),
    }),
  }),
});

export const { useGetAllPaymentsQuery, useGetPaymentStatsQuery } = paymentApi;

export default paymentApi;
