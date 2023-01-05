import { Pagination } from "src/features/core/components/Pagination";
import { MovieList } from "src/features/movie/layouts/MovieList";
import { useGetMoviesSearchQuery } from "src/features/movie/store/movieService";

interface MovieResultsPageProps {
  query: string;
  page: number;
  setPage: (page: number) => void;
  assetUrl?: string;
}

export const MovieResultsPage: React.FC<MovieResultsPageProps> = ({
  query,
  page,
  setPage,
  assetUrl,
}) => {
  const { data, isLoading } = useGetMoviesSearchQuery({ query, page });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <MovieList movies={data?.results || []} assetUrl={assetUrl} />
      <Pagination
        currentPage={page}
        totalPages={data?.total_pages || 1}
        onPageChange={setPage}
      />
    </div>
  );
};
