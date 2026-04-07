import baseApi from '../../api/baseApi';

// Tack Image interface for product images
export interface TackImage {
  id?: string;
  url: string;
  tackProductId?: string;
}

// Tack Product Data Interface
export interface TackData {
  id: string;
  name: string;
  sku?: string | null;
  price?: string | number | null;
  size?: string[] | string | null;
  images?: TackImage[];
}

// Response when getting all tack products
export interface GetAllTacksResponse {
  success?: boolean;
  message?: string;
  data: TackData[];
}

// Response for a single tack product
export interface GetSingleTackResponse {
  success?: boolean;
  message?: string;
  data: TackData;
}

// Payload for adding a tack product to favorites
export interface AddTackFavoritePayload {
  tackProductId: string;
}

// Response when a tack product is added to favorites
export interface AddTackFavoriteResponse {
  id: string;
  createdAt: string;
  userId: string;
  tackProductId: string;
  saddleProductId: string | null;
  usedSaddleProductId: string | null;
  savedProduct: {
    id: string;
    name: string;
    sku: string | null;
    price_usd: string | null;
    price_eur: string | null;
    size: string | null;
    stockQuantity: number | null;
    description: string | null;
    country: string | null;
    category: string | null;
    subcategory: string | null;
    images: TackImage[];
  };
}

// Response when removing a tack product from favorites
export interface RemoveTackFavoriteResponse {
  success?: boolean;
  message?: string;
}

// Favorite List Item Interface for the list of saved favorites
export interface FavoriteListItem {
  id: string;
  type: 'TACK_PRODUCT' | 'SADDLE_PRODUCT' | string;
  savedAt: string;
  product: {
    id: string;
    name: string;
    sku?: string | null;
    subcategory?: string | null;
    image?: string | null;
  };
}

const tackApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    // Fetch all tack products
    getAllTacks: builder.query<GetAllTacksResponse, void>({
      query: () => ({
        url: `/tacks`,
        method: 'GET',
      }),
      providesTags: ['Tack', 'Favorite'],
    }),

    // Fetch a single tack product by id
    getSingleTack: builder.query<GetSingleTackResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/tacks/${id}`,
        method: 'GET',
      }),
      providesTags: ['Tack', 'Favorite'],
    }),

    // Add a tack product to favorites
    addTackToFavorite: builder.mutation<
      AddTackFavoriteResponse,
      AddTackFavoritePayload
    >({
      query: body => ({
        url: `/saved-product`,
        method: 'POST',
        body, // Send the tackProductId
      }),
      invalidatesTags: ['TackFavorite'],
    }),

    // Remove a tack product from favorites using the unique favorite id
    removeFavorite: builder.mutation<
      RemoveTackFavoriteResponse,
      { favoriteId: string }
    >({
      query: ({ favoriteId }) => ({
        url: `/saved-product/${favoriteId}`, // Use the unique favorite ID
        method: 'DELETE',
      }),
      invalidatesTags: ['TackFavorite'],
    }),

    // Fetch all saved favorites
    getAllFavorites: builder.query<FavoriteListItem[], void>({
      query: () => ({
        url: `/saved-product`,
        method: 'GET',
      }),
      providesTags: ['TackFavorite'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllTacksQuery,
  useGetSingleTackQuery,
  useAddTackToFavoriteMutation,
  useRemoveFavoriteMutation,
  useGetAllFavoritesQuery,
} = tackApi;

export default tackApi;
