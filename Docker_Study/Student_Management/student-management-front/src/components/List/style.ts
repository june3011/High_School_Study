import styled, { css } from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;

export const ListTable = styled.table`
  border: none;
  display: flex;
  flex-direction: column;
`;

export const ListTr = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListTh = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 70px;
  border-top: 1px solid navy;
  border-bottom: 1px solid navy;
`;

export const ListBtnTh = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 70px;
  border-top: 1px solid navy;
  border-bottom: 1px solid navy;
`;

type TdButtonType = "modify" | "cancle";

export const TdButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ListBtnTd = styled.td<{ TdButtonType: TdButtonType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;

  ${({ TdButtonType }) =>
    TdButtonType === "modify" &&
    css`
      background-color: royalblue;
    `}
  ${({ TdButtonType }) =>
    TdButtonType === "cancle" &&
    css`
      background-color: red;
    `};
`;

export const ListTd = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
`;
