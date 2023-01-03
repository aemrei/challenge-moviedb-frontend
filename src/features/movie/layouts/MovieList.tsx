import { Link } from "react-router-dom";
import { MovieCard } from "../components/MovieCard";

interface MovieListProps {
  movies: Movie[];
  title?: string;
  assetUrl?: string;
}

export const MovieList: React.FC<MovieListProps> = ({
  assetUrl = process.env.REACT_APP_ASSET_ROOT_URL,
  title,
  movies,
}) => {
  return (
    <div>
      {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
      <ul className="flex flex-col gap-y-4">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <MovieCard movie={movie} assetUrl={assetUrl} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
