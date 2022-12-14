import styled from "styled-components";

export const InputText = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 42px;
  border-radius: 4px;
  padding: 12px 14px 12px 16px;
  border: 1px solid #ecf0f5;
  outline: none;
  font-size: 14px;
  line-height: 18px;
  color: #505b67;
`;

export const LabelText = styled.label`
  position: relative;
`;

export const HelperText = styled.p`
  position: absolute;
  top: 2px;
  left: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #aab4bd;
`;
