import React, { useState } from "react";
import PropTypes from "prop-types";

import Checkbox from "../Checkbox/";
import Flex from "../Flex";
import Select from "../Select";
import Counter from "../Counter";
import {
  InputText,
  InputTextList,
  InputTextItem,
  CheckBoxList,
  CheckBoxItem,
  InputFile,
  FormBody,
  TeamTitle,
  VotesTitle,
} from "./styles";

const Form2 = (props) => {
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
        <TeamTitle>Team</TeamTitle>
        <Flex width="100%" justify="space-between">
          <Select width="200px" name="designs" id="design-select">
            <option value="">Design</option>
            <option value="dog">Another design</option>
          </Select>

          <Counter></Counter>
          <Select width="240px" name="designs" id="design-select">
            <option value="">Design</option>
            <option value="dog">Another design</option>
          </Select>
        </Flex>
        <VotesTitle>Votes</VotesTitle>
        {/* <InputTextList>
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
        <InputFile /> */}
      </FormBody>
    </form>
  );
};
// Form1.propTypes = {
//   onChange: PropTypes.func,
// };

export default Form2;
