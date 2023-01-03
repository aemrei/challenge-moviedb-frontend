import { SearchBox } from "src/features/search/components/SearchBox";

export const AppBar = () => {
  return (
    <nav className="px-2 bg-gray-200 border-b-gray-300 py-2.5 border shadow-sm bg-transparent">
      <div className="flex flex-wrap items-center justify-between mx-auto ">
        <SearchBox value="" onSearch={() => {}} />
      </div>
    </nav>
  );
};
