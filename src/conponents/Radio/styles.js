import styled from "styled-components";
import icon from "../../images/icons/checkbox.svg";

export const CheckboxContainer = styled.div``;

export const InputRadio = styled.input.attrs({ type: "Radio" })`
  appearance: none;
`;

export const LabelRadio = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  color: #828282;
  cursor: pointer;

  &::before {
    margin-right: 10px;
    top: 4px;
    left: 0;
    content: "";
    display: block;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 2px solid #aab4bd;
    border-radius: 50%;

    ${(props) =>
      props.isChecked &&
      `
      border-color: #4ec970;;
      `}
  }
  &::after {
    ${(props) =>
      props.isChecked &&
      `
      position: absolute;
    top: 5px;
    left: 5px;
    content: "";
    display: block;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    background-color: #4ec970;
    border-radius: 50%;
    `}
  }
`;
