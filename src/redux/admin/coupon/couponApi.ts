import baseApi from "../../api/baseApi";

const couponApi = baseApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getCoupons: builder.query<any, void>({
      query: () => ({
        url: "/coupon",
        method: "GET",
      }),
    }),

       createCoupon: builder.mutation({
      query: (body) => ({
        url: "/coupon",
        method: "POST",
        body,
      }),
    }),


    deleteCoupon: builder.mutation({
  query: (id: string) => ({
    url: `/coupon/${id}`,
    method: "DELETE",
  }),
}),



getCouponById: builder.query({
  query: (id: string) => ({
    url: `/coupon/${id}`,
    method: "GET",
  }),
}),



  }),
});

export const { useGetCouponsQuery  , useCreateCouponMutation , useDeleteCouponMutation ,useGetCouponByIdQuery,  } = couponApi;

export default couponApi;