import { PopularMoviesPage } from "src/features/movie/layouts/PopularMoviesPage";
import { MultiSearchResultsPage } from "src/features/search/layouts/MultiSearchResultsPage";
import { searchSelectors, setPage } from "src/features/search/store/searchSlice";
import { useAppDispatch, useAppSelector } from "src/store";

const HomePage = () => {
  const query = useAppSelector(searchSelectors.query);
  const page = useAppSelector(searchSelectors.page);
  const dispatch = useAppDispatch();
  const updatePage = (page: number) => dispatch(setPage(page));

  if (query) {
    return <MultiSearchResultsPage page={page} setPage={updatePage} query={query} />;
  }
  return <PopularMoviesPage page={page} setPage={updatePage} />;
};

export default HomePage;
