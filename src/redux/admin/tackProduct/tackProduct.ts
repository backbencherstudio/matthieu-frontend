import baseApi from "../../api/baseApi";

const tackProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addColor: builder.mutation({
      query: (data) => ({
        url: "/add/color",
        method: "POST",
        body: data,
      }),
    }),

    createTackProduct: builder.mutation({
      query: (data) => ({
        url: "/tackproduct/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["TackProduct"],
    }),

    addSize: builder.mutation({
      query: (data) => ({
        url: "/add/size",
        method: "POST",
        body: data,
      }),
    }),

    colorsList: builder.query({
      query: () => ({
        url: "/add/color",
        method: "GET",
      }),
    }),

    sizeList: builder.query({
      query: () => ({
        url: "/add/size",
        method: "GET",
      }),
    }),

    tackLists: builder.query({
      query: () => ({
        url: "/tackproduct/list",
        method: "GET",
      }),
      providesTags: ["TackProduct"],
    }),

    getSingleTack: builder.query({
      query: (id) => ({
        url: `/tackproduct/oneproduct/${id}`,
        method: "GET",
      }),
      providesTags: ["TackProduct"],
    }),

    deleteTack: builder.mutation({
      query: (id) => ({
        url: `/tackproduct/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TackProduct"],
    }),
  }),
});

export const {
  useAddColorMutation,
  useColorsListQuery,
  useAddSizeMutation,
  useSizeListQuery,
  useCreateTackProductMutation,
  useTackListsQuery,
  useGetSingleTackQuery,
  useDeleteTackMutation,
} = tackProductApi;

export default tackProductApi;
