import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  maxVisiblePages?: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  maxVisiblePages = 5,
  onPageChange,
}) => {
  const startIndexDiff = Math.max(-Math.floor(maxVisiblePages / 2), 1 - currentPage);
  const pages = Array.from({ length: Math.min(totalPages, maxVisiblePages) }, (_, i) => {
    return i + currentPage + startIndexDiff;
  });

  return (
    <div className="flex items-center justify-center">
      <button
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaChevronLeft className="w-5 h-5 text-gray-700" />
      </button>
      {pages.map((page) =>
        page === currentPage ? (
          <span
            key={page}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-400"
          >
            {page}
          </span>
        ) : (
          <button
            key={page}
            className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300"
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ),
      )}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <FaChevronRight className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};
