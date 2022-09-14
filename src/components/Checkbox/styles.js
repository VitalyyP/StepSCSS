import styled from "styled-components";
import icon from "../../images/icons/checkbox.svg";

export const CheckboxContainer = styled.div``;

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  appearance: none;
`;

export const LabelCheckbox = styled.label`
  color: #828282;
  display: flex;
  align-items: center;
  cursor: pointer;
  &::before {
    margin-right: 8px;
    top: 4px;
    left: 0;
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
