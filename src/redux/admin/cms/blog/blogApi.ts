import baseApi from "../../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: ({ search, page, status }) => ({
        url: "/blogs",
        method: "GET",
        params: {
          search,
          page,
          status,
        },
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogApi;

export default blogApi;
