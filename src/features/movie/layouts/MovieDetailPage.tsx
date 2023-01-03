import { RatingStars } from "src/features/core/components/RatingStars";
import { useGetMovieQuery } from "../store/movieService";

interface MovieDetailPageProps {
  id: string;
}
export const MovieDetailPage = ({ id }: MovieDetailPageProps) => {
  const { data, error, isLoading } = useGetMovieQuery(id);

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
    <div>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <RatingStars rating={(data.vote_average || 0) / 2} />
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
};
