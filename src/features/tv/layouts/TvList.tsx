import { Link } from "react-router-dom";
import { TvCard } from "../components/TvCard";

interface TvListProps {
  tvs: Tv[];
  title?: string;
  assetUrl?: string;
}

export const TvList: React.FC<TvListProps> = ({
  assetUrl = process.env.REACT_APP_ASSET_ROOT_URL,
  title,
  tvs,
}) => {
  return (
    <div>
      {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
      <ul className="flex flex-col gap-y-4">
        {tvs.map((tv) => (
          <li key={tv.id}>
            <Link to={`/details/${tv.id}`}>
              <TvCard tv={tv} assetUrl={assetUrl} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
