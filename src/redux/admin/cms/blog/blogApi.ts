import baseApi from "../../../api/baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => {
        return {
          url: "/blogs",
          method: "POST",
          body: data,
        };
      },
    }),

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

export const {
  useCreateBlogMutation,
  useGetAllBlogsQuery,
  useDeleteBlogMutation,
} = blogApi;

export default blogApi;
