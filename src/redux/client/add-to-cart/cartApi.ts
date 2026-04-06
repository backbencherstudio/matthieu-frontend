import baseApi from '../../api/baseApi';

export type CartCurrency = 'EUR' | 'USD' | string;

export interface CartItemApi {
  itemId: string;
  quantity: number;
  sku: string | null;
  itemName: string;
  itemImage: string;
  price: number;
  currency: CartCurrency;
  totalPrice: number;
  usedSaddleId: string | null;
  variantId?: string | null;
  tackProductId?: string | null;
}

export interface CartSummaryApi {
  currency: CartCurrency;
  subtotal: number;
  shipping: number;
  tax: number;
  couponCode?: string;
  couponMessage?: string;
  couponDiscount: number;
  total: number;
}

export interface CartResponseData {
  items: CartItemApi[];
  summary: CartSummaryApi;
}

export interface GetCartResponse {
  success: boolean;
  message: string;
  data: CartResponseData;
}

export interface UpdateCartQuantityPayload {
  itemId: string;
  quantity: number;
}

export interface UpdateCartQuantityResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    cartId: string;
    quantity: number;
    tackProductId: string | null;
    variantId: string | null;
    usedSaddleId: string | null;
    leadlineId: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface DeleteCartItemResponse {
  success: boolean;
  message: string;
}

export interface ClearCartResponse {
  success: boolean;
  message: string;
}

export interface GetCartArgs {
  coupon?: string;
}

const cartApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCart: builder.query<GetCartResponse, GetCartArgs | undefined>({
      query: args => {
        const coupon = args?.coupon;

        return {
          url: '/cart',
          method: 'GET',
          params: coupon ? { coupon } : undefined,
        };
      },
      providesTags: ['Cart'],
    }),

    updateCartItemQuantity: builder.mutation<
      UpdateCartQuantityResponse,
      UpdateCartQuantityPayload
    >({
      query: ({ itemId, quantity }) => ({
        url: `/cart/${itemId}`,
        method: 'PATCH',
        body: { quantity },
      }),
      invalidatesTags: ['Cart'],
    }),

    deleteCartItem: builder.mutation<DeleteCartItemResponse, string>({
      query: itemId => ({
        url: `/cart/${itemId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),

    clearCart: builder.mutation<ClearCartResponse, void>({
      query: () => ({
        url: '/cart/clear',
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCartQuery,
  useLazyGetCartQuery,
  useUpdateCartItemQuantityMutation,
  useDeleteCartItemMutation,
  useClearCartMutation,
} = cartApi;

export default cartApi;
