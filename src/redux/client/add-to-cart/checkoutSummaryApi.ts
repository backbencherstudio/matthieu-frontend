import baseApi from '../../api/baseApi';

export type CheckoutCurrency = 'USD' | 'EUR' | string;

export interface CheckoutSummaryItem {
  quantity: number;
  itemId: string;
  itemName: string;
  itemImage: string;
  price: number;
  currency: CheckoutCurrency;
  totalPrice: number;
  variantId?: string | null;
  tackProductId?: string | null;
  usedSaddleId?: string | null;
}

export interface CheckoutAddress {
  id: string;
  userId?: string | null;
  sessionId?: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string | null;
  streetAddress: string;
  apartment?: string | null;
  city: string;
  state?: string | null;
  zipCode: string;
  country: string;
  createdAt?: string;
}

export interface CheckoutSummaryInfo {
  currency: CheckoutCurrency;
  subtotal: number;
  shipping: number;
  tax: number;
  couponCode?: string;
  couponMessage?: string;
  couponDiscount: number;
  total: number;
}

export interface CheckoutSummaryData {
  items: CheckoutSummaryItem[];
  address: CheckoutAddress;
  summary: CheckoutSummaryInfo;
}

export interface GetCheckoutSummaryResponse {
  success: boolean;
  message: string;
  data: CheckoutSummaryData;
}

const checkoutSummaryApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCheckoutSummary: builder.query<GetCheckoutSummaryResponse, void>({
      query: () => ({
        url: '/checkout/summary',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCheckoutSummaryQuery } = checkoutSummaryApi;

export default checkoutSummaryApi;
