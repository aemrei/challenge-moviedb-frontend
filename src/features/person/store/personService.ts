import { baseApi } from "src/store/api";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPeopleSearch: build.query<ResultSet<Person>, SearchParams>({
      query: ({ query, page }) => `search/person?query=${query}&page=${page}`,
    }),
  }),
});

export const { useGetPeopleSearchQuery } = extendedApi;
