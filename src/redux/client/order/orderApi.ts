import baseApi from '../../api/baseApi';

export type OrderCurrency = 'USD' | 'EUR' | string;
export type OrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'CONFIRMED'
  | 'DELIVERED'
  | 'COMPLETED'
  | 'CANCELLED'
  | string;

export interface OrderItemApi {
  id: string;
  orderId: string;
  tackProductId: string | null;
  variantId: string | null;
  usedSaddleId: string | null;
  leadlineId: string | null;
  itemName: string;
  itemImage: string;
  price: number;
  quantity: number;
  totalPrice: number;
  currency: OrderCurrency;
}

export interface OrderAddressApi {
  id: string;
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface OrderApi {
  id: string;
  orderNumber: string;
  userId: string | null;
  sessionId: string | null;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  currency: OrderCurrency;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  items: OrderItemApi[];
  address: OrderAddressApi;
}

export interface GetOrdersResponse {
  success: boolean;
  message: string;
  data: OrderApi[];
}

export interface GetOrdersArgs {
  coupon?: string;
}

export interface CreateOrderResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    orderNumber: string;
    userId?: string | null;
    sessionId?: string | null;
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
    currency: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
}

const orderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createOrder: builder.mutation<CreateOrderResponse, void>({
      query: () => ({
        url: '/order',
        method: 'POST',
      }),
      invalidatesTags: ['Order'],
    }),

    getOrders: builder.query<GetOrdersResponse, GetOrdersArgs | undefined>({
      query: args => ({
        url: '/order',
        method: 'GET',
        params: args?.coupon ? { coupon: args.coupon } : undefined,
      }),
      providesTags: ['Order'],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation, useGetOrdersQuery } = orderApi;

export default orderApi;
