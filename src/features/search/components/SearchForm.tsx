import clsx from "clsx";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { FaSearch as SearchIcon } from "react-icons/fa";

interface SearchFormProps extends React.HTMLAttributes<HTMLFormElement> {
  value: string;
  onSearch: (value: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  value,
  onSearch,
  className,
  ...props
}) => {
  const { handleSubmit, register, reset, watch } = useForm({
    defaultValues: {
      search: value,
    },
  });
  const hasValue = !!watch("search");

  return (
    <form
      className={clsx(
        "flex items-center bg-gray-300 rounded-lg w-full px-3 py-2",
        className,
      )}
      onSubmit={handleSubmit((data) => onSearch(data.search))}
      {...props}
    >
      <SearchIcon className="w-25 h-25 text-gray-500 " />
      <input
        className="text-gray-900 bg-transparent placeholder-gray-500 px-3 w-full outline-none"
        type="text"
        placeholder="Search..."
        {...register("search")}
      />
      {hasValue && (
        <button type="reset" onClick={() => reset()}>
          <CloseIcon className="w-25 h-25 text-gray-500 " />
        </button>
      )}
      <button type="submit" className="sr-only">
        Search
      </button>
    </form>
  );
};
