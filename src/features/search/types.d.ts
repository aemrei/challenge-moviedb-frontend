type SearchType = "movie" | "tv" | "person";

interface SearchState {
  type: SearchType;
  query: string;
  page: number;
}

interface SearchParams {
  query: string;
  page: number;
}
