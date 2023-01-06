import { Pagination } from "src/features/core/components/Pagination";
import { Spinner } from "src/features/core/components/Spinner";
import { PersonList } from "src/features/person/layouts/PersonList";
import { useGetPeopleSearchQuery } from "src/features/person/store/personService";

interface PeopleResultsPageProps {
  query: string;
  page: number;
  setPage: (page: number) => void;
  assetUrl?: string;
}

export const PeopleResultsPage: React.FC<PeopleResultsPageProps> = ({
  query,
  page,
  setPage,
  assetUrl,
}) => {
  const { data, isLoading } = useGetPeopleSearchQuery({ query, page });

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <PersonList people={data?.results || []} assetUrl={assetUrl} />
      <Pagination
        currentPage={page}
        totalPages={data?.total_pages || 1}
        onPageChange={setPage}
        className="my-4"
      />
    </div>
  );
};
