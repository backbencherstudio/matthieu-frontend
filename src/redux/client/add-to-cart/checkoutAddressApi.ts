import baseApi from '../../api/baseApi';

export interface CreateCheckoutAddressPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
  streetAddress: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface CreateCheckoutAddressResponse {
  success: boolean;
  message: string;
  data?: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    companyName?: string;
    streetAddress?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    createdAt?: string;
    updatedAt?: string;
  };
}

const checkoutAddressApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCheckoutAddress: builder.mutation<
      CreateCheckoutAddressResponse,
      CreateCheckoutAddressPayload
    >({
      query: body => ({
        url: '/checkout/address',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateCheckoutAddressMutation } = checkoutAddressApi;

export default checkoutAddressApi;
