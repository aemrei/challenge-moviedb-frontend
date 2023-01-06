import { RatingStars } from "src/features/core/components/RatingStars";
import { ContentSection } from "../components/ContentSection";
import { useGetMovieQuery } from "../store/movieService";
import { FaChevronLeft as LeftIcon } from "react-icons/fa";

interface MovieDetailPageProps {
  id: string;
}
export const MovieDetailPage = ({ id }: MovieDetailPageProps) => {
  const { data: movie, error, isLoading } = useGetMovieQuery(id);
  const assetUrl = process.env.REACT_APP_ASSET_ROOT_URL;

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

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="flex flex-col w-screen">
      {/* back button */}
      <div className="fixed top-0 left-0 m-4">
        <button
          className="flex bg-white rounded-full shadow-md p-2"
          onClick={() => window.history.back()}
        >
          <LeftIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-col items-center m-2 space-y-3">
        <img
          className="h-60 rounded-lg overflow-hidden"
          src={(assetUrl || "") + movie.poster_path}
          alt={movie.title}
        />
        <h2>{movie.title}</h2>
        <RatingStars rating={(movie.vote_average || 0) / 2} />
      </div>
      <div className="bg-white py-3 space-y-3 px-6">
        <ContentSection title="Summary">
          <p className="text-sm">{movie.overview}</p>
        </ContentSection>
        <ContentSection title="Videos">
          <div className="flex gap-x-2 overflow-x-scroll w-full">
            {movie.videos?.results.map((video) => (
              <a
                href={`https://www.youtube.com/watch?v=${video.key}`}
                target="_blank"
                rel="noreferrer"
                key={video.id}
              >
                <figure className="w-64">
                  <img
                    className="w-64 h-40 rounded-md shadow-md object-cover object-center"
                    src={`https://img.youtube.com/vi/${video.key}/0.jpg`}
                    alt={video.name}
                  />
                  <figcaption className="text-xs w-full mt-3 truncate">
                    {video.name}
                  </figcaption>
                </figure>
              </a>
            ))}
          </div>
        </ContentSection>
        <ContentSection title="Cast">
          <div className="flex gap-x-2 overflow-x-scroll w-full">
            {movie.credits?.cast
              .filter((c) => c.profile_path)
              .map((cast) => (
                <figure key={cast.id} className="w-32">
                  {/* set profile image as background */}
                  <div
                    className="w-32 h-40 rounded-md bg-cover bg-center shadow-md"
                    style={{
                      backgroundImage: `url(${assetUrl}${cast.profile_path})`,
                    }}
                  />
                  <figcaption className="text-xs w-full mt-3 truncate">
                    {cast.name}
                  </figcaption>
                </figure>
              ))}
          </div>
        </ContentSection>
      </div>
    </div>
  );
};
