import clsx from "clsx";

interface SpinnerProps {
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
  return (
    <div className={clsx("flex justify-center w-10 h-10", className)}>
      <div className="animate-spin rounded-full h-full w-full border-b-2 border-gray-900" />
    </div>
  );
};
