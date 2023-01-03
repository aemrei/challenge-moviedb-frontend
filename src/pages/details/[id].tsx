import { useNavigate, useParams } from "react-router-dom";
import { MovieDetailPage } from "src/features/movie/layouts/MovieDetailPage";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  if (!id) {
    navigate("/404");
    return null;
  }
  return <MovieDetailPage id={id} />;
};

export default DetailPage;
