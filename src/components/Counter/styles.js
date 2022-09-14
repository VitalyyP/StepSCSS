import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 112px;
  height: 44px;
  border: 1px solid #ccd2e3;
  border-radius: 4px;
  background: #ffffff;
`;

export const Minus = styled.div`
  position: relative;
  width: 36px;
  height: 44px;
  cursor: pointer;
  &::before {
    position: absolute;
    top: 21px;
    left: 14px;
    width: 8px;
    height: 2px;
    content: "";
    background-color: #3974f6;
    border-radius: 1px;
  }
`;

export const Plus = styled.div`
  position: relative;
  width: 36px;
  height: 44px;
  cursor: pointer;
  &::after,
  &::before {
    position: absolute;
    content: "";
    background-color: #3974f6;
    border-radius: 1px;
  }
  &::before {
    width: 8px;
    height: 2px;
    top: 21px;
    left: 14px;
  }
  &::after {
    top: 18px;
    left: 17px;
    width: 2px;
    height: 8px;
  }
`;

export const Middle = styled.div`
  width: 40px;
  height: 42px;
  border-right: 1px solid #f7f8f9;
  border-left: 1px solid #f7f8f9;
`;

export const Span = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #505b67;
`;
