import baseApi from "../../api/baseApi";

const paymentApi = baseApi.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({

        payment: builder.mutation({
            query: (data) => ({
                url: "/payment/intent",
                method: "POST",
                body: data,
            }),
        }),

    }),
});

export const { usePaymentMutation } = paymentApi;

export default paymentApi;