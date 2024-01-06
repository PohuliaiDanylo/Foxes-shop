import { Link, useMatch } from "react-router-dom";

const CustomLink = ({
  children,
  className,
  to,
  self,
  ...props
}: {
  children: any;
  className?: any;
  to: any;
  self?: any;
}) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={
        match
          ? "header-container__navigation-menu__list__element__active"
          : "" + className
      }
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
