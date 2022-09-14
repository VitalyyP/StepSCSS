import React, { useContext } from "react";

import { AppContext } from "../../providers";
import Checkbox from "../Checkbox/";
import InputTextWithHelperText from "../InputTextWithHelperText";
import {
  FormBody,
  InputTextList,
  InputTextItem,
  CheckBoxList,
  CheckBoxItem,
  InputFile,
} from "./styles";

const Form1 = () => {
  const { state, dispatch } = useContext(AppContext);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch({ type: "setText", payload: { name, value } });
  };

  const onCheck = (e) => {
    const name1 = e.target.name;
    const isChecked1 = e.target.checked;
    dispatch({ type: "setChecked", payload: { name1, isChecked1 } });
  };

  return (
    <form>
      <FormBody>
        <InputTextList>
          <InputTextItem>
            {state.stageTitle ? (
              <InputTextWithHelperText
                name="stageTitle"
                onChange={onChange}
                value={state.stageTitle}
                className="focusWithText"
              >
                Stage Title
              </InputTextWithHelperText>
            ) : (
              <InputTextWithHelperText
                name="stageTitle"
                onChange={onChange}
                value={state.stageTitle}
              >
                Stage Title
              </InputTextWithHelperText>
            )}
          </InputTextItem>
          <InputTextItem>
            {state.stageSubtitle ? (
              <InputTextWithHelperText
                name="stageSubtitle"
                onChange={onChange}
                value={state.stageSubtitle}
                className="focusWithText"
              >
                Stage Subtitle
              </InputTextWithHelperText>
            ) : (
              <InputTextWithHelperText
                name="stageSubtitle"
                onChange={onChange}
                value={state.stageSubtitle}
              >
                Stage Subtitle
              </InputTextWithHelperText>
            )}
          </InputTextItem>
          <InputTextItem>
            {state.stageType ? (
              <InputTextWithHelperText
                name="stageType"
                onChange={onChange}
                value={state.stageType}
                className="focusWithText"
              >
                Stage Type
              </InputTextWithHelperText>
            ) : (
              <InputTextWithHelperText
                name="stageType"
                onChange={onChange}
                value={state.stageType}
              >
                Stage Type
              </InputTextWithHelperText>
            )}
          </InputTextItem>
        </InputTextList>
        <CheckBoxList>
          <CheckBoxItem>
            <Checkbox id="canUpload" onCheck={onCheck} form={state}>
              Candidate can upload files
            </Checkbox>
          </CheckBoxItem>
          <CheckBoxItem>
            <Checkbox id="canDownload" onCheck={onCheck} form={state}>
              Candidate can download files
            </Checkbox>
          </CheckBoxItem>
        </CheckBoxList>
        <InputFile />
      </FormBody>
    </form>
  );
};

export default Form1;
