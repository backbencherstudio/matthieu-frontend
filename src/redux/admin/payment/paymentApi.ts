import baseApi from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPayments: builder.query({
      query: () => ({
        url: "/payment/transactions",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPaymentsQuery } = paymentApi;

export default paymentApi;
