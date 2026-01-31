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

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllBlogsQuery, useDeleteBlogMutation } = blogApi;

export default blogApi;
