import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTvSearch: build.query<ResultSet<Tv>, SearchParams>({
      query: ({ query, page }) => `search/person?query=${query}&page=${page}`,
    }),
  }),
});

export const { useGetTvSearchQuery } = extendedApi;
