import styled, { css } from "styled-components";
import iconOutlined from "../../images/icons/starOutlined.svg";
import iconFilled from "../../images/icons/starFilled.svg";

export const Wrapper = styled.div`
  width: 136px;
  height: 24px;
`;

export const Title = styled.h4`
  margin-bottom: 8px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #505b67;
`;

export const Stars = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 136px;
  height: 24px;
`;

export const Star = styled.li`
  width: 24px;
  height: 24px;
  background-image: url(${iconOutlined});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  &:hover {
    background-image: url(${iconFilled});
  }
  ${(props) =>
    props.isFilled &&
    css`
      background-image: url(${iconFilled});
    `}
`;
