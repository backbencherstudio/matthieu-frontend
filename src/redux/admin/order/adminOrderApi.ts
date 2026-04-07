import baseApi from '../../api/baseApi';

export type AdminOrderCurrency = 'USD' | 'EUR' | string;
export type AdminOrderStatus =
  | 'PENDING'
  | 'PROCESSING'
  | 'CONFIRMED'
  | 'DELIVERED'
  | 'COMPLETED'
  | 'CANCELLED'
  | string;

export interface AdminOrderItemApi {
  id: string;
  orderId: string;
  itemName: string;
  price: number;
  quantity: number;
  totalPrice: number;
  currency: AdminOrderCurrency;
}

export interface AdminOrderAddressApi {
  id: string;
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface AdminOrderApi {
  id: string;
  orderNumber: string;
  userId: string | null;
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  currency: AdminOrderCurrency;
  status: AdminOrderStatus;
  createdAt: string;
  updatedAt: string;
  items: AdminOrderItemApi[];
  address: AdminOrderAddressApi;
}

export interface GetAdminOrdersResponse {
  success: boolean;
  message: string;
  data: AdminOrderApi[];
}

const adminOrderApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAdminOrders: builder.query<GetAdminOrdersResponse, void>({
      query: () => ({
        url: '/order',
        method: 'GET',
      }),
      providesTags: ['Order'],
    }),
    // Other endpoints like createOrder, updateOrder can be added as needed
  }),
  overrideExisting: false,
});

export const { useGetAdminOrdersQuery } = adminOrderApi;

export default adminOrderApi;
