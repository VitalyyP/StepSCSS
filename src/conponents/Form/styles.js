import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 836px;
  height: 763px;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 10px;
`;
Wrapper.displayName = "TransactionWrapper";

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 772px;
  height: 496px;
  background-color: #f6f8fd;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 48px 100px;
  margin-bottom: 10px;
`;
FormBody.displayName = "FormBody";

export const InputText = styled.input.attrs({ type: "text" })`
  border-radius: 3px;
  padding: 11px 16px;
  width: 100%;
  margin-bottom: 16px;
  border: 1px solid #ecf0f5;
  outline: none;
  font-family: "Rubik";
  font-size: 14px;
  line-height: 18px;
`;
InputText.displayName = "InputText";

export const InputFile = styled.input.attrs({ type: "file" })`
  width: 150px;
  height: 40px;
  margin-top: 16px;
  margin-left: 33px;
  visibility: hidden;
  // &::-webkit-file-upload-button {
  //   visibility: hidden;
  // }

  &:: before {
    visibility: visible;
    color: #505b67;
    content: "Select file...";
    display: flex;
    align-items: center;
    justify-content: center;
    // background: linear-gradient(top, #f9f9f9, #e3e3e3);
    // border: 1px solid #999;
    // border-radius: 50%;
    // padding: 5px 8px;
    // outline: none;
    // white-space: nowrap;
    // -webkit-user-select: none;
    // cursor: pointer;
    // text-shadow: 1px 1px #fff;
    // font-weight: 700;
    // font-size: 10pt;

    box-sizing: border-box;

    // position: absolute;
    width: 150px;
    height: 40px;
    left: 133px;
    bottom: 136px;
    border: 2px solid #5a9cff;
    border-radius: 30px;
  }
`;
InputFile.displayName = "InputFile";

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
Button.displayName = "Button";
