import { useGetPopularMoviesQuery } from "src/features/movie/store/movieService";
import { MovieList } from "./MovieList";

export const PopularMoviesPage: React.FC = () => {
  const { data: resultSet, error, isLoading } = useGetPopularMoviesQuery();

  if (isLoading) {
    return <div>Loading...</div>;
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
    <div className="flex flex-col gap-y-4 px-6 ">
      {resultSet && (
        <MovieList
          title="Popular Movies"
          movies={resultSet.results}
          assetUrl={process.env.REACT_APP_ASSET_ROOT_URL}
        />
      )}
    </div>
  );
};
