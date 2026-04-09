import baseApi from '../../api/baseApi';

export interface TrySaddleItem {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  message: string;
  discipline: string;
  created_at: string;
  updated_at: string;
}

export interface GetTrySaddleResponse {
  success: boolean;
  message: string;
  data: TrySaddleItem[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export interface GetSingleTrySaddleResponse {
  success: boolean;
  message: string;
  data: TrySaddleItem;
}

export interface CreateTrySaddleRequest {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  city: string;
  state: string;
  zip_code: string;
  message: string;
  discipline: string;
}

const trySaddleApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getTrySaddles: builder.query<
      GetTrySaddleResponse,
      { page?: number; limit?: number; search?: string } | void
    >({
      query: params => ({
        url: '/try-saddle',
        method: 'GET',
        params: params || {},
      }),
      providesTags: ['TrySaddle'],
    }),
    getSpecificTrySaddle: builder.query<GetSingleTrySaddleResponse, string>({
      query: id => ({
        url: `/try-saddle/${id}`,
        method: 'GET',
      }),
      providesTags: ['TrySaddle'],
    }),
    createTrySaddle: builder.mutation<
      GetSingleTrySaddleResponse,
      CreateTrySaddleRequest
    >({
      query: body => ({
        url: '/try-saddle',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['TrySaddle'],
    }),
    deleteTrySaddle: builder.mutation<
      { success: boolean; message: string },
      string
    >({
      query: id => ({
        url: `/try-saddle/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['TrySaddle'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTrySaddlesQuery,
  useGetSpecificTrySaddleQuery,
  useCreateTrySaddleMutation,
  useDeleteTrySaddleMutation,
} = trySaddleApi;

export default trySaddleApi;
