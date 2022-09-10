import styled from "styled-components";
import icon from "../../images/icons/checkbox.svg";

export const CheckboxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  padding: 6px 16px 6px 10px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  appearance: none;
`;

export const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #828282;

  &::after {
    position: absolute;

    margin-right: 9px;
    top: 6px;
    right: 51px;
    content: "";
    display: block;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    border: 2px solid #aab4bd;
    border-radius: 4px;
    ${(props) =>
      props.checked &&
      `
      border: none;
      background-image: url(${icon});
      `}
  }
`;
