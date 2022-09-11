import styled from "styled-components";

export const FormBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #f6f8fd;
  border-radius: 8px;
  padding: 32px 24px 98px;
`;

export const FeedbackTitle = styled.h3`
  width: 100%;
  margin-bottom: 24px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #505b67;
`;

export const Area = styled.div`
  width: 724px;
  height: 251px;
  left: 24px;
  top: 76px;
  padding: 26px 34px 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  background: #ffffff;
`;

export const RadioList = styled.ul`
  list-style: none;
  margin-bottom: 22px;
`;

export const RadioItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const CheckboxList = styled.ul`
  list-style: none;
  margin-left: 32px;
`;

export const CheckboxItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const RateList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 724px;
  height: 88px;
  left: 24px;
  top: 351px;
  background: #ffffff;
  border-radius: 8px;
  padding: 21px 50px 21px 53px;
  margin-bottom: 24px;
`;

export const Feedback = styled.textarea`
  width: 724px;
  height: 42px;
  left: 24px;
  top: 463px;
  background: #ffffff;
  border: 1px solid #ecf0f5;
  border-radius: 4px;
  padding: 12px 14px 12px 16px;
  resize: none;
  outline: none;
`;
