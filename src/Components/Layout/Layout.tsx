import { ReactElement } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-primary h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
