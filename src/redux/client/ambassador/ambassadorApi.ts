import baseApi from "../../api/baseApi";

const ambassadorApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAmbassadors: builder.query({
      query: () => ({
        url: "/ambassador",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAmbassadorsQuery } = ambassadorApi;

export default ambassadorApi;
