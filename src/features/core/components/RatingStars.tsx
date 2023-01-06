import clsx from "clsx";
import {
  AiFillStar as FillStarIcon,
  AiOutlineStar as OutlineStarIcon,
} from "react-icons/ai";

interface RatingStarsProps {
  maxRating?: number;
  rating: number;
  className?: string;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  maxRating = 5,
  rating,
  className,
}) => {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <div className={clsx("flex items-center", className)}>
      {stars.map((star) =>
        star <= Math.round(rating) ? (
          <FillStarIcon key={star} className="w-5 h-5 text-yellow-500" />
        ) : (
          <OutlineStarIcon key={star} className="w-5 h-5 text-yellow-500" />
        ),
      )}
    </div>
  );
};
