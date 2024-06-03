import clsx from "clsx";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={clsx(
      "gap-6 rounded-3xl font-semibold text-base bg-secondary-gray text-primary-text",
      className
    )}
  >
    {children}
  </div>
);

export default Card;
