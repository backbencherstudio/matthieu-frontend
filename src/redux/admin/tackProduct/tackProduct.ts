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
  }),
});

export const {
  useAddColorMutation,
  useColorsListQuery,
  useAddSizeMutation,
  useSizeListQuery,
  useCreateTackProductMutation,
} = tackProductApi;

export default tackProductApi;
