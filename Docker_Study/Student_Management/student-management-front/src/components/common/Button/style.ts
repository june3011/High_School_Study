import styled, { css } from "styled-components";
import { palette } from "../../../styles/palette";
import { ButtonType } from "./type";

export const ButtonContainer = styled.button<{ buttonType: ButtonType }>`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: white;
  border-radius: 15px;
  border: none;
  cursor: poiter;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);

  ${({ buttonType }) =>
    buttonType === "main" &&
    css`
      background-color: ${palette.main};
    `}

  ${({ buttonType }) =>
    buttonType === "sub" &&
    css`
      background-color: ${palette.sub};
    `}
`;
