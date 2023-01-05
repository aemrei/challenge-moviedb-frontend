import clsx from "clsx";

interface MovieCardProps extends React.HTMLAttributes<HTMLDivElement> {
  movie: Movie;
  assetUrl?: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  assetUrl = process.env.REACT_APP_ASSET_ROOT_URL,
  movie,
  className,
  ...props
}) => {
  return (
    <div className={clsx("flex", className)} {...props}>
      <div className="flex-shrink-0 z-10 h-60">
        {movie.poster_path && (
          <img
            className="h-60 rounded-lg overflow-hidden"
            src={(assetUrl || "") + movie.poster_path}
            alt={movie.title}
          />
        )}
      </div>
      <div className="flex items-end -translate-x-3 grow">
        <div className="bg-white h-[85%] flex flex-col justify-between shadow-md rounded-lg p-3 pl-6 w-full">
          <h2 className="text-2xl font-semibold ">{movie.title}</h2>
          <p className="line-clamp-3">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
