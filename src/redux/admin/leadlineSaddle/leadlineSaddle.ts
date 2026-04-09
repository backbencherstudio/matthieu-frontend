import baseApi from "../../api/baseApi";

const LeadlineSaddle = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLeadlineSaddle: builder.mutation({
      query: (formData) => ({
        url: "/sadlles/admin",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["leadlineSaddle"],
    }),

    getallLeadlineSaddle: builder.query({
      query: () => ({
        url: "/sadlles/admin/leadlines",
        method: "GET",
      }),
      providesTags: ["leadlineSaddle"],
    }),

    deleteLeadlineSaddle: builder.mutation({
      query: (id) => ({
        url: `/sadlles/admin/leadline/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["leadlineSaddle"],
    }),
  }),
});

export const {
  useCreateLeadlineSaddleMutation,
  useGetallLeadlineSaddleQuery,
  useDeleteLeadlineSaddleMutation,
} = LeadlineSaddle;

export default LeadlineSaddle;
