import { HeaderContainer, HeaderSection } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderSection onClick={() => navigate("/adf")}>홈</HeaderSection>
      <HeaderSection>{"기준 <- 얘가 만듦"}</HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
