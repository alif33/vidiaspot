import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const homeApi = createApi({
  reducerPath: 'home',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://vidiaspot.com/api/' }),
  endpoints: (builder) => ({
    getHome: builder.query({
      query: (name) => `homeSections`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetHomeQuery } = homeApi