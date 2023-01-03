import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMovie: build.query<Movie, string>({
      query: (id) => `movie/${id}`,
    }),
    getPopularMovies: build.query<ResultSet<Movie>, void>({
      query: () => `movie/popular`,
    }),
  }),
});

export const { useGetMovieQuery, useGetPopularMoviesQuery } = extendedApi;