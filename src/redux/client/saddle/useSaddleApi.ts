import baseApi from "../../api/baseApi";

const useSaddleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUseSaddles: builder.query({
      query: () => ({
        url: `/used-saddles`,
        method: "GET",
      }),
    }),
    getSingleUseSaddle: builder.query({
      query: (id) => ({
        url: `/used-saddles/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUseSaddlesQuery, useGetSingleUseSaddleQuery } =
  useSaddleApi;

export default useSaddleApi;


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