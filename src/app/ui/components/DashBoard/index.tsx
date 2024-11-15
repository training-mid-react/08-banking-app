import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  Sidebar: JSX.Element;
}

export const DashBoard: FC<Props> = ({ children, Sidebar }) => {
  return (
    <div className="home">
        {Sidebar}
        <div className="home__content">
          {children}
        </div>
      </div>
  );
}