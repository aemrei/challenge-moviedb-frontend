import clsx from "clsx";

interface PersonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  person: Person;
  assetUrl?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  assetUrl = process.env.REACT_APP_ASSET_ROOT_URL,
  person,
  className,
  ...props
}) => {
  return (
    <div className={clsx("flex", className)} {...props}>
      <div className="flex-shrink-0 z-10">
        <img
          className="h-60 rounded-lg overflow-hidden"
          src={(assetUrl || "") + person.profile_path}
          alt={person.name}
        />
      </div>
      <div className="flex items-end -translate-x-3">
        <div className="bg-white h-[85%] flex flex-col justify-between shadow-md rounded-lg p-3 pl-6">
          <h2 className="text-2xl font-semibold ">{person.name}</h2>
          <p className="line-clamp-3"></p>
        </div>
      </div>
    </div>
  );
};
