import styled from "styled-components";

export const ModifyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 100px;
  align-items: center;
  gap: 20px;
`;

export const ModifyInput = styled.input`
  border: 1px solid navy;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 10px;
`;

export const ModifyButton = styled.button`
  background-color: navy;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
`;
