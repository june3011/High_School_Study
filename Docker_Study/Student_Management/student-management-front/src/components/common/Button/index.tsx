import { ButtonContainer } from "./style";
import { ButtonProps } from "./type";

const Button = ({
  buttonType,
  customStyle,
  children,
  ...attr
}: ButtonProps) => {
  return (
    <ButtonContainer
      buttonType={buttonType}
      style={{ ...customStyle }}
      {...attr}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
