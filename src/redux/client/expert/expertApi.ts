import baseApi from '../../api/baseApi';

export interface ExpertItem {
  name: string;
  email: string;
  phone: string;
  region: string;
}

export interface GetExpertsResponse {
  success: boolean;
  message: string;
  data: {
    data: Array<{
      country?: string;
      [key: string]: unknown;
    }>;
  };
}

export interface GetExpertByCountryResponse {
  success: boolean;
  message: string;
  data: ExpertItem[];
}

const expertApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getExperts: builder.query<GetExpertsResponse, void>({
      query: () => ({
        url: `/experts`,
        method: 'GET',
      }),
    }),

    getExpertByCountry: builder.query<GetExpertByCountryResponse, string>({
      query: country => ({
        url: `/experts/country/${country}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetExpertsQuery, useGetExpertByCountryQuery } = expertApi;

export default expertApi;
