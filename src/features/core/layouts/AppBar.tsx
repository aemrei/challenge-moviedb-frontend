import { useLocation } from "react-router-dom";
import { SearchForm } from "src/features/search/components/SearchForm";

export const AppBar = () => {
  const location = useLocation();
  if (location.pathname === "/404" || location.pathname.startsWith("/details")) {
    return null;
  }
  return (
    <nav className="px-2 bg-gray-200 border-b-gray-300 py-2.5 border shadow-sm bg-transparent">
      <div className="flex flex-wrap items-center justify-between mx-auto ">
        <SearchForm value="" onSearch={() => {}} />
      </div>
    </nav>
  );
};
