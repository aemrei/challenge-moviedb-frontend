import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query<Movie, string>({
      query: (id) => `movie/${id}?append_to_response=videos,credits`,
    }),
    getPopularMovies: build.query<ResultSet<Movie>, number>({
      query: (page) => `movie/popular?page=${page}`,
    }),
    getMoviesSearch: build.query<ResultSet<Movie>, SearchParams>({
      query: ({ query, page }) => `search/movie?query=${query}&page=${page}`,
    }),
  }),
});

export const { useGetMovieQuery, useGetPopularMoviesQuery, useGetMoviesSearchQuery } =
  extendedApi;
