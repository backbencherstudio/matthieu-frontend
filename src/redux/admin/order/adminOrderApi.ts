import baseApi from '../../api/baseApi';

export type AdminOrderCurrency = 'USD' | 'EUR' | string;
export type AdminOrderStatus =
  | 'PENDING'
  | 'INPROCESS'
  | 'DELIVERED'
  | 'CANCEL'
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

// Response type for fetching all orders
export interface GetAdminOrdersResponse {
  success: boolean;
  message: string;
  data: AdminOrderApi[];
  meta?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Response type for a specific order
export interface GetSpecificOrderResponse {
  success: boolean;
  message: string;
  data: AdminOrderApi;
}

// Request type for updating order status
export interface UpdateOrderStatusRequest {
  status: AdminOrderStatus;
}

// Admin order API service
const adminOrderApi = baseApi.injectEndpoints({
  endpoints: builder => ({

    getAdminOrders: builder.query<
      GetAdminOrdersResponse,
      { search?: string; status?: string; page?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: '/admin/orders',
        method: 'GET',
        params: params || {}, 
      }),
      providesTags: ['Order'],
    }),

    // Get specific order by ID
    getSpecificOrder: builder.query<GetSpecificOrderResponse, string>({
      query: id => ({
        url: `/admin/orders/${id}`,
        method: 'GET',
      }),
      providesTags: ['Order'],
    }),

    // Update order status by ID
    updateOrderStatus: builder.mutation<
      AdminOrderApi,
      { id: string; status: AdminOrderStatus }
    >({
      query: ({ id, status }) => ({
        url: `/admin/orders/${id}/status`,
        method: 'PUT',
        body: { status },
      }),
      invalidatesTags: ['Order'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAdminOrdersQuery,
  useGetSpecificOrderQuery,
  useUpdateOrderStatusMutation,
} = adminOrderApi;

export default adminOrderApi;
