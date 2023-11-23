import { Link, useMatch } from "react-router-dom";

const CustomLink = ({
  children,
  to,
  self,
  ...props
}: {
  children: any;
  to: any;
  self?: any;
}) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={
        match ? "header-container__navigation-menu__list__element__active" : ""
      }
      {...props}
    >
      {children}
    </Link>
  );
};

export { CustomLink };
