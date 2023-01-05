import clsx from "clsx";

interface TvCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tv: Tv;
  assetUrl?: string;
}

export const TvCard: React.FC<TvCardProps> = ({
  assetUrl = process.env.REACT_APP_ASSET_ROOT_URL,
  tv,
  className,
  ...props
}) => {
  return (
    <div className={clsx("flex", className)} {...props}>
      <div className="flex-shrink-0 z-10 h-60">
        {tv.poster_path && (
          <img
            className="h-60 rounded-lg overflow-hidden"
            src={(assetUrl || "") + tv.poster_path}
            alt={tv.name}
          />
        )}
      </div>
      <div className="flex items-end -translate-x-3 grow">
        <div className="bg-white h-[85%] flex flex-col justify-between shadow-md rounded-lg p-3 pl-6 w-full">
          <h2 className="text-2xl font-semibold ">{tv.name}</h2>
          <p className="line-clamp-3">{tv.overview}</p>
        </div>
      </div>
    </div>
  );
};
