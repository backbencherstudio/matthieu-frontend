// import baseApi from "../../api/baseApi";

// const useSaddleApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllSaddles: builder.query({
//       query: () => ({
//         url: `/sadlles`,
//         method: "GET",
//       }),
//     }),
//     getSingleSaddle: builder.query({
//       query: ({ id }) => ({
//         url: `/sadlles/${id}`,
//         method: "GET",
//       }),
//     }),
//     getLeadLineSaddle: builder.query({
//       query: () => ({
//         url: `/sadlles/leadline/product`,
//         method: "GET",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetAllSaddlesQuery,
//   useGetSingleSaddleQuery,
//   useGetLeadLineSaddleQuery,
// } = useSaddleApi;

// export default useSaddleApi;

import baseApi from "../../api/baseApi";

export interface SaddleImage {
  id?: string;
  url: string;
  saddleProductId?: string;
}

export interface SaddleData {
  id: string;
  name: string;
  sku?: string | null;
  stockQuantity?: string | null;
  price?: string | number | null;
  size?: string[] | string | null;
  images?: SaddleImage[];
}

export interface GetAllSaddlesResponse {
  success?: boolean;
  message?: string;
  data: SaddleData[];
}

export interface GetSingleSaddleResponse {
  success?: boolean;
  message?: string;
  data: SaddleData;
}

export interface GetLeadLineSaddleResponse {
  success?: boolean;
  message?: string;
  data: SaddleData;
}

export interface AddSaddleFavoritePayload {
  saddleProductId: string;
}

export interface AddSaddleFavoriteResponse {
  id: string;
  createdAt: string;
  userId: string;
  tackProductId: string | null;
  saddleProductId: string | null;
  usedSaddleProductId: string | null;
  savedProduct: {
    id: string;
    name: string;
    sku: string | null;
    header_title: string | null;
    header_description: string | null;
    price_usd: string | null;
    price_eur: string | null;
    size: string | null;
    stockQuantity: number | null;
    description: string | null;
    country: string | null;
    category: string | null;
    subcategory: string | null;
    colors: string[] | null;
    piping_color: string[] | null;
    leather_type: string[] | null;
    createdAt: string;
    updatedAt: string;
    images: {
      id: string;
      url: string;
      saddleProductId: string;
    }[];
  };
}

export interface RemoveFavoriteResponse {
  success?: boolean;
  message?: string;
}

export interface FavoriteListItem {
  id: string;
  type: "SADDLE_PRODUCT" | "TACK_PRODUCT" | string;
  savedAt: string;
  product: {
    id: string;
    name: string;
    sku?: string | null;
    subcategory?: string | null;
    image?: string | null;
  };
}

const saddleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSaddles: builder.query({
      query: () => ({
        url: `/sadlles`,
        method: "GET",
      }),
      providesTags: ["Saddle", "Favorite"],
    }),

    getSingleSaddle: builder.query({
      query: ({ id }) => ({
        url: `/sadlles/${id}`,
        method: "GET",
      }),
      providesTags: ["Saddle", "Favorite"],
    }),

    getLeadLineSaddle: builder.query<GetLeadLineSaddleResponse, void>({
      query: () => ({
        url: `/sadlles/leadline/product`,
        method: "GET",
      }),
      providesTags: ["Saddle", "Favorite"],
    }),

    addSaddleToFavorite: builder.mutation<
      AddSaddleFavoriteResponse,
      AddSaddleFavoritePayload
    >({
      query: (body) => ({
        url: `/saved-product`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Favorite"],
    }),

    leadlineAddToCart: builder.mutation({
      query: (body) => ({
        url: `/cart/add`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Saddle"],
    }),

    removeFavorite: builder.mutation<
      RemoveFavoriteResponse,
      { favoriteId: string }
    >({
      query: ({ favoriteId }) => ({
        url: `/saved-product/${favoriteId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite"],
    }),

    getAllFavorites: builder.query<FavoriteListItem[], void>({
      query: () => ({
        url: `/saved-product`,
        method: "GET",
      }),
      providesTags: ["Favorite"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllSaddlesQuery,
  useGetSingleSaddleQuery,
  useGetLeadLineSaddleQuery,
  useAddSaddleToFavoriteMutation,
  useRemoveFavoriteMutation,
  useGetAllFavoritesQuery,
  useLeadlineAddToCartMutation,
} = saddleApi;

export default saddleApi;
