import baseApi from '../../api/baseApi';

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
    }),
  }),
  overrideExisting: false,
});

export const { useCreateOrderMutation } = orderApi;

export default orderApi;
