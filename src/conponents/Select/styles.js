import styled from "styled-components";
import icon from "../../images/icons/arrowdown.svg";

export const SelectContainer = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  appearance: none;
  outline: none;
  width: ${(props) => props.width};
  height: 44px;
  padding: 13px 16px;
  border: 1px solid #ecf0f5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  color: #505b67;
`;

export const LabelSelect = styled.label`
  &::after {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 10px;
    height: 6px;
    background-image: url(${icon});
    content: "";
    pointer-events: none;
  }
`;
