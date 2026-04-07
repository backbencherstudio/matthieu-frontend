import baseApi from "../../api/baseApi";

const LeadlineSaddle = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        createLeadlineSaddle: builder.mutation({
            query: (formData) => ({
                url: "/sadlles",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: ["leadlineSaddle"],
        }),

        getallLeadlineSaddle: builder.query({
            query: () => ({
                url: "/sadlles/leadlines/admin",
                method: "GET",
            }),
            providesTags: ["leadlineSaddle"],
        }),

        deleteLeadlineSaddle: builder.mutation({
            query: (id) => ({
                url: `/sadlles/${id}`,
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
