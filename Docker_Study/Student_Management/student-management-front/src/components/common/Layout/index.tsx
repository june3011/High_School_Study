import Header from "../Header";
import { LayoutContainer } from "./style";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
