import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  width: 150px;
  height: 40px;
  background-color: #4ec970;
  box-shadow: 0px 4px 10px rgba(57, 116, 246, 0.2);
  border: none;
  border-radius: 30px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  ${(props) =>
    props.outlined &&
    css`
      color: #505b67;
      border: 2px solid #5a9cff;
      border-radius: 30px;
      background-color: transparent;
    `}
`;
