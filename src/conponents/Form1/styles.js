import styled from "styled-components";

export const FormBody = styled.div`
  position: relative;
  width: 772px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #f6f8fd;
  border-radius: 8px;
  padding: 48px 100px 128px;
`;

export const InputTextList = styled.ul`
  list-style: none;
  width: 100%;
  margin-bottom: 36px;
`;

export const InputTextItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const InputText = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 42px;
  border-radius: 4px;
  padding: 12px 14px 12px 16px;
  border: 1px solid #ecf0f5;
  outline: none;
  font-size: 14px;
  line-height: 18px;
  color: #aab4bd;
`;

export const CheckBoxList = styled.ul`
  list-style: none;
  margin-bottom: 24px;
`;

export const CheckBoxItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const InputFile = styled.input.attrs({ type: "file" })`
  width: 150px;
  height: 40px;
  margin-left: 33px;
  visibility: hidden;
  cursor: pointer;
  &::before {
    visibility: visible;
    color: #505b67;
    content: "Select file...";
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    width: 150px;
    height: 40px;
    left: 133px;
    bottom: 136px;
    border: 2px solid #5a9cff;
    border-radius: 30px;
  }
`;

export const Button = styled.button`
  border: 1px solid #dbdbdb;
  height: 40px;
  border-radius: 3px;
  padding: 0 21px;
  box-sizing: border-box;
  background-color: #e0e0e0;
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
  margin-right: 10px;
  outline: none;
  width: 118px;

  &hover {
    cursor: pointer;
  }
`;
