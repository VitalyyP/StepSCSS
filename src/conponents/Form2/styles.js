import styled from "styled-components";
import icon from "../../images/icons/arrowdown.svg";

export const FormBody = styled.div`
  position: relative;
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

export const VotesTitle = styled(TeamTitle)`
  margin-top: 80px;
  margin-bottom: 26px;
  font-size: 14px;
  line-height: 18px;
`;

export const Area = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 362px;
  height: 85px;
  padding: 2px;
  border: 1px solid #ccd2e3;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const Card = styled.div`
  position: relative;
  display: inline-block;
  margin: 2px;
  padding: 9px 44px 9px 10px;
  background: #ecf0f5;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #505b67;
`;

export const DeleteMark = styled.div`
  position: absolute;
  top: 6px;
  right: 10px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #fefefe;
  cursor: pointer;
  &::after,
  &::before {
    position: absolute;
    top: 11px;
    right: 6.5px;
    content: "";
    background-color: #ccd2e3;
    width: 11px;
    height: 1.5px;
    border-radius: 1px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const AddCard = styled.div`
  position: relative;
  display: inline-block;
  margin: 2px;
  width: 44px;
  height: 36px;
  border: 1px dashed #aab4bd;
  border-radius: 4px;
  cursor: pointer;
  &::after,
  &::before {
    position: absolute;
    content: "";
    background-color: #ccd2e3;
    border-radius: 1px;
  }
  &::before {
    width: 11px;
    height: 2px;
    top: 16px;
    right: 15.5px;
  }
  &::after {
    bottom: 11.5px;
    left: 20px;
    width: 2px;
    height: 11px;
  }
`;

export const DashedLine = styled.div`
  position: absolute;
  width: 676px;
  height: 0px;
  left: 48px;
  top: 317px;
  border-bottom: 1px dashed #aab4bd;
`;

export const CheckboxForVoteList = styled.ul`
  list-style: none;
  width: 100%;
  /* margin-bottom: 24px; */
`;

export const CheckboxForVoteItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;
