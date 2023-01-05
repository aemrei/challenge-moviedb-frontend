import clsx from "clsx";
import { MovieResultsPage } from "src/features/movie/layouts/MovieResultsPage";
import { PeopleResultsPage } from "src/features/person/layouts/PeopleResultsPage";
import { TvResultsPage } from "src/features/tv/layouts/TvResultsPage";
import { useAppDispatch, useAppSelector } from "src/store";
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
  const type = useAppSelector(searchSelectors.type);

  return (
    <div className="flex flex-col gap-y-6">
      <nav className="flex gap-x-4">
        <button
          className={clsx(
            "text-lg font-bold",
            type === "movie" ? "text-white" : "text-gray-400",
          )}
          onClick={() => dispatch(setType("movie"))}
        >
          Movies
        </button>
        <button
          className={clsx(
            "text-lg font-bold",
            type === "person" ? "text-white" : "text-gray-400",
          )}
          onClick={() => dispatch(setType("person"))}
        >
          People
        </button>
        <button
          className={clsx(
            "text-lg font-bold",
            type === "tv" ? "text-white" : "text-gray-400",
          )}
          onClick={() => dispatch(setType("tv"))}
        >
          TV
        </button>
      </nav>

      {type === "movie" && (
        <MovieResultsPage page={page} query={query} setPage={setPage} />
      )}
      {type === "person" && (
        <PeopleResultsPage page={page} query={query} setPage={setPage} />
      )}
      {type === "tv" && <TvResultsPage page={page} query={query} setPage={setPage} />}
    </div>
  );
};
