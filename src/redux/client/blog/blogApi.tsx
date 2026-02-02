import baseApi from "../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blogs/published",
        method: "GET",
      }),
    }),

    getSingleBlog: builder.query({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetSingleBlogQuery } = blogApi;

export default blogApi;
