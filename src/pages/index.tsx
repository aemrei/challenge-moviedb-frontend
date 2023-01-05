import { PopularMoviesPage } from "src/features/movie/layouts/PopularMoviesPage";
import { MultiSearchResultsPage } from "src/features/search/layouts/MultiSearchResultsPage";
import { searchSelectors, setPage } from "src/features/search/store/searchSlice";
import { useAppDispatch, useAppSelector } from "src/store";

const HomePage = () => {
  const query = useAppSelector(searchSelectors.query);
  const page = useAppSelector(searchSelectors.page);
  const dispatch = useAppDispatch();
  const updatePage = (page: number) => dispatch(setPage(page));

  return (
    <div className="flex flex-col gap-y-4 px-6 grow">
      {query ? (
        <MultiSearchResultsPage page={page} setPage={updatePage} query={query} />
      ) : (
        <PopularMoviesPage page={page} setPage={updatePage} />
      )}
    </div>
  );
};

export default HomePage;
