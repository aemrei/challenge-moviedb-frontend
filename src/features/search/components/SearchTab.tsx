import clsx from "clsx";

interface SearchTabProps {
  selected: SearchType;
  type: SearchType;
  text: string;
  onClick: (type: SearchType) => void;
}

export const SearchTab: React.FC<SearchTabProps> = ({
  selected,
  text,
  type,
  onClick,
}) => {
  return (
    <div className="grow -translate-x-1">
      <button
        className={clsx("text-lg font-bold px-5 py-3 m-1 rounded-md w-full", {
          "bg-gray-200": selected === type,
        })}
        onClick={() => onClick(type)}
      >
        {text}
      </button>
    </div>
  );
};
