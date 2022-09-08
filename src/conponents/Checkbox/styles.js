import styled from "styled-components";
import icon from "../../images/icons/checkbox.svg";

export const CheckboxContainer = styled.div`
  // position: relative;
`;
CheckboxContainer.displayName = "CheckboxContainer";

export const InputCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  // -webkit-appearance: none;
  // -moz-appearance: none;
  appearance: none;
`;
InputCheckbox.displayName = "InputCheckbox";

export const LabelCheckbox = styled.label`
  color: #828282;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &:: before {
    margin-right: 9px;
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
LabelCheckbox.displayName = "LabelCheckbox";
