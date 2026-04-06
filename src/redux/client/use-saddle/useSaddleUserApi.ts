import baseApi from "../../api/baseApi";

const useSaddleUserApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUseSaddlesUser: builder.query({
      query: (params = {}) => ({
        url: `/used-saddles/public`,
        method: "GET",
        params,   
      }),
    }),
   getSingleUseSaddleUser: builder.query({
      query: ({ id, trialPeriod }) => ({
        url: `/used-saddles/public/${id}`,
        method: "GET",
        params: trialPeriod ? { trialPeriod } : {},
      }),
    }),

    createSaddleAlert: builder.mutation({
      query: (body) => ({
        url: "/saddle-alert",
        method: "POST",
        body,
      }),
    }),

  }),
});

export const { useGetAllUseSaddlesUserQuery, useGetSingleUseSaddleUserQuery, useCreateSaddleAlertMutation } =
  useSaddleUserApi;

export default useSaddleUserApi;


// import baseApi from "../../api/baseApi";

// Helper – reusable across endpoints
// const getRegionHeader = () => {
//   let region = 'other';
//   if (typeof document !== 'undefined') {
//     const match = document.cookie.match(/x-region=([^;]+)/);
//     if (match) region = match[1];
//   }
//   return { "x-country": region };
// };

// const useSaddleApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllUseSaddles: builder.query({
//       query: () => ({
//         url: `/used-saddles`,
//         method: "GET",
//         headers: getRegionHeader(),
//       }),
//     }),

//     getSingleUseSaddle: builder.query({
//       query: (id) => ({
//         url: `/used-saddles/${id}`,
//         method: "GET",
//         headers: getRegionHeader(),
//       }),
//     }),
//   }),
// });

// export const { useGetAllUseSaddlesQuery, useGetSingleUseSaddleQuery } = useSaddleApi;

// export default useSaddleApi;