import { useCallback } from "react";
import { MovieResultsPage } from "src/features/movie/layouts/MovieResultsPage";
import { PeopleResultsPage } from "src/features/person/layouts/PeopleResultsPage";
import { TvResultsPage } from "src/features/tv/layouts/TvResultsPage";
import { useAppDispatch, useAppSelector } from "src/store";
import { SearchTab } from "../components/SearchTab";
import { searchSelectors, setType } from "../store/searchSlice";

interface MultiSearchResultsPageProps {
  query: string;
  page: number;
  setPage: (page: number) => void;
}

export const MultiSearchResultsPage: React.FC<MultiSearchResultsPageProps> = ({
  query,
  page,
  setPage,
}) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(searchSelectors.type);
  const setSelected = useCallback(
    (type: SearchType) => dispatch(setType(type)),
    [dispatch],
  );

  return (
    <div className="flex flex-col gap-y-6">
      <nav className="flex gap-x-4 bg-gray-400 rounded-md shadow-sm grow px-1">
        <SearchTab selected={selected} type="movie" text="Movies" onClick={setSelected} />
        <SearchTab
          selected={selected}
          type="person"
          text="People"
          onClick={setSelected}
        />
        <SearchTab selected={selected} type="tv" text="TV" onClick={setSelected} />
      </nav>

      {selected === "movie" && (
        <MovieResultsPage page={page} query={query} setPage={setPage} />
      )}
      {selected === "person" && (
        <PeopleResultsPage page={page} query={query} setPage={setPage} />
      )}
      {selected === "tv" && <TvResultsPage page={page} query={query} setPage={setPage} />}
    </div>
  );
};
