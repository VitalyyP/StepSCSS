import React, { useState } from "react";

import Checkbox from "../Checkbox/";
import PropTypes from "prop-types";
import {
  InputText,
  InputTextList,
  InputTextItem,
  CheckBoxList,
  CheckBoxItem,
  InputFile,
  Button,
  FormBody,
} from "./styles";

const Form = (props) => {
  const [form, setForm] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    props.onChange(form);
    setForm({
      ...form,
      value: "",
      comment: "",
    });
    props.onCloseModalForm();
  };

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onCheck = (e) => {
    console.log(e.target.checked);
    const { name } = e.target;

    setForm({
      ...form,
      [name]: e.target.checked,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormBody>
        <InputTextList>
          <InputTextItem>
            <InputText
              type="text"
              name="stageTitle"
              placeholder="Stage Title"
              value={form.value}
              onChange={onChange}
            />
          </InputTextItem>
          <InputTextItem>
            <InputText
              type="text"
              name="stageSubtitle"
              placeholder="Stage Subtitle"
              value={form.value}
              onChange={onChange}
            />
          </InputTextItem>
          <InputTextItem>
            <InputText
              type="text"
              name="stageType"
              placeholder="Test Task"
              value={form.value}
              onChange={onChange}
            />
          </InputTextItem>
        </InputTextList>
        <CheckBoxList>
          <CheckBoxItem>
            <Checkbox id="canUpload" onCheck={onCheck} form={form}>
              Candidate can upload files
            </Checkbox>
          </CheckBoxItem>
          <CheckBoxItem>
            <Checkbox id="canDownload" onCheck={onCheck} form={form}>
              Candidate can download files
            </Checkbox>
          </CheckBoxItem>
        </CheckBoxList>
        <InputFile />
      </FormBody>
    </form>
  );
};
Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
