import { CSSProperties } from "styled-components";

export type ButtonType = "main" | "sub";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: ButtonType;
  customStyle?: CSSProperties;
  children: JSX.Element;
}
