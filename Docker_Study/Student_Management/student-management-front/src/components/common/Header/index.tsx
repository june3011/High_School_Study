import { HeaderContainer, HeaderSection } from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderSection onClick={() => navigate("/")}>홈</HeaderSection>
      <HeaderSection onClick={() => navigate("/register")}>등록</HeaderSection>
      <HeaderSection>{"기준 <- 얘가 만듦"}</HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
