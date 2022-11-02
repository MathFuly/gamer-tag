import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const key = "?key=606d649d54f3487d82b8a57caf8b0a71";

export const gamesCoreApi = createApi({
  reducerPath: "gamesCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  endpoints: (builder) => ({
    getListBestGames: builder.query({
      query: () => `/games${key}&ordering=-metacritic`,
    }),
    getGameById: builder.query({
      query: (query) => `/games/${query}${key}`,
    }),
    getSearchGames: builder.query({
      query: ({ query, page }) =>
        `/games${key}&page=${page || 1}&search=${query}&search_precise=1`,
    }),
    getScreenshotsById: builder.query({
      query: (query) => `/games/${query}/screenshots${key}`,
    }),
    getTrailerById: builder.query({
      query: (query) => `/games/${query}/movies${key}`,
    }),
    getPlatformGames: builder.query({
      query: ({ query, page }) =>
        `/games${key}&parent_platforms=${query  || 1}&page=${page || 1}`
    }),
  }),
});

export const {
  useGetListBestGamesQuery,
  useGetGameByIdQuery,
  useGetSearchGamesQuery,
  useGetScreenshotsByIdQuery,
  useGetTrailerByIdQuery,
  useGetPlatformGamesQuery,
} = gamesCoreApi;
