import baseApi from "../../../api/baseApi";

const calendarApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCalendar: builder.mutation({
      query: (data) => ({
        url: "/competitions",
        method: "POST",
        body: data,
      }),
    }),

    getAllCalendar: builder.query({
      query: ({ search, page }) => ({
        url: "/competitions",
        method: "GET",
        params: {
          search,
          page,
        },
      }),
    }),

    updateCalendar: builder.mutation({
      query: ({ id, data }) => ({
        url: `/competitions/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteCalendar: builder.mutation({
      query: (id) => ({
        url: `/competitions/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateCalendarMutation,
  useGetAllCalendarQuery,
  useUpdateCalendarMutation,
  useDeleteCalendarMutation,
} = calendarApi;

export default calendarApi;
