import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store";

const initialState: SearchState = {
  type: "movie",
  query: "",
  page: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<SearchState["type"]>) => {
      state.type = action.payload;
      state.page = 1;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.page = 1;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const searchReducer = searchSlice.reducer;

export const { setType, setQuery, setPage } = searchSlice.actions;

export const searchSelectors = {
  type: (state: RootState) => state.search.type,
  page: (state: RootState) => state.search.page,
  query: (state: RootState) => state.search.query,
};
