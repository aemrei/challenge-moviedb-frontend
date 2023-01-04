import clsx from "clsx";

interface ContentSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <section className={clsx("flex flex-col gap-y-4", className)}>
      <h2 className="text-3xl font-bold my-3">{title}</h2>
      {children}
    </section>
  );
};
