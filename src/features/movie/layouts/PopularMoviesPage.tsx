import { Pagination } from "src/features/core/components/Pagination";
import { Spinner } from "src/features/core/components/Spinner";
import { useGetPopularMoviesQuery } from "src/features/movie/store/movieService";
import { MovieList } from "./MovieList";

interface PopularMoviesPageProps {
  page?: number;
  setPage: (page: number) => void;
}
export const PopularMoviesPage: React.FC<PopularMoviesPageProps> = ({
  page = 1,
  setPage,
}) => {
  const { data: resultSet, error, isLoading } = useGetPopularMoviesQuery(page);

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    if ("status" in error) {
      // handle FetchBaseError
      const errMsg = "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    } else if ("name" in error) {
      // handle SerializedError
      return <div>{error.message}</div>;
    }
  }

  return (
    <div>
      {resultSet && (
        <MovieList
          title="Popular Movies"
          movies={resultSet.results}
          assetUrl={process.env.REACT_APP_ASSET_ROOT_URL}
        />
      )}
      <Pagination
        currentPage={page}
        totalPages={resultSet?.total_pages || 1}
        onPageChange={setPage}
        className="my-4"
      />
    </div>
  );
};
