import { Pagination } from "src/features/core/components/Pagination";
import { TvList } from "../layouts/TvList";
import { useGetTvSearchQuery } from "../store/tvService";

interface TvResultsPageProps {
  query: string;
  page: number;
  setPage: (page: number) => void;
  assetUrl?: string;
}

export const TvResultsPage: React.FC<TvResultsPageProps> = ({
  query,
  page,
  setPage,
  assetUrl,
}) => {
  const { data, isLoading } = useGetTvSearchQuery({ query, page });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TvList tvs={data?.results || []} assetUrl={assetUrl} />
      <Pagination
        currentPage={page}
        totalPages={data?.total_pages || 1}
        onPageChange={setPage}
        className="my-4"
      />
    </div>
  );
};
