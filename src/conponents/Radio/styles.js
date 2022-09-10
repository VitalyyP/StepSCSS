import styled from "styled-components";
import icon from "../../images/icons/checkbox.svg";

export const CheckboxContainer = styled.div``;

export const InputRadio = styled.input.attrs({ type: "Radio" })`
  /* position: absolute; */
  appearance: none;
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  color: #828282;

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
      props.checked &&
      `
      border: 2px solid  #4ec970;;
      `}
  }
`;
