import clsx from "clsx";
import { FaSearch as SearchIcon } from "react-icons/fa";

interface SearchBoxProps extends React.HTMLAttributes<HTMLFormElement> {
  value: string;
  onSearch: (value: string) => void;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onSearch,
  className,
  ...props
}) => {
  return (
    <form
      className={clsx(
        "flex items-center bg-gray-300 rounded-lg w-full px-3 py-2",
        className,
      )}
      {...props}
    >
      <SearchIcon className="w-25 h-25 text-gray-500 " />
      <input
        className="text-gray-900 bg-transparent placeholder-gray-500 px-3 w-full outline-none"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </form>
  );
};
