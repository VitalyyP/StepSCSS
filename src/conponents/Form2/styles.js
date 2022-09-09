import styled from "styled-components";
import icon from "../../images/icons/arrowdown.svg";

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #f6f8fd;
  border-radius: 8px;
  padding: 32px 100px 40px;
`;

export const TeamTitle = styled.h3`
  width: 100%;
  margin-bottom: 16px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #505b67;
`;
// TeamTitle.displayName = "TeamTitle";

export const VotesTitle = styled(TeamTitle)`
  margin-bottom: 26px;
  font-size: 14px;
  line-height: 18px;
`;
// VotesTitle.displayName = "VotesTitle";

export const Select = styled.select`
  appearance: none;
  outline: none;
  width: 200px;
  height: 44px;
  padding: 13px 16px;
  border: 1px solid #ecf0f5;
  border-radius: 4px;
  font-size: 14px;
  line-height: 18px;
  color: #505b67;
  /* &::after {
    position: absolute;
    top: 100px;
    right: 100px;
    content: "";
    width: 50px;
    height: 90px;
    /* background-image: url(${icon});
    background-color: red;
  } */
    &::after {
      position: absolute;
      left: -56px;
      width: 32px;
      height: 4px;
      background-color: red;
      content: "";
    }
`;

export const Label = styled.label`
  &::after {
    position: absolute;
    right: 5px;
    width: 32px;
    height: 4px;
    background-color: red;
    content: "";
  }
`;
