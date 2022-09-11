import React, { useState } from "react";
import PropTypes from "prop-types";

import Radio from "../Radio";
import Checkbox from "../Checkbox";
import {
  FormBody,
  FeedbackTitle,
  Area,
  RadioList,
  RadioItem,
  CheckboxList,
  CheckboxItem,
  RateList,
  Feedback,
} from "./styles";
import Rate from "../Rate";

const Form3 = (props) => {
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
        <FeedbackTitle>Feedback</FeedbackTitle>
        <Area>
          <RadioList>
            <RadioItem>
              <Radio>Confirm next stage</Radio>
            </RadioItem>
            <RadioItem>
              <Radio>Not suitable for the next stage</Radio>
            </RadioItem>
          </RadioList>
          <CheckboxList>
            <CheckboxItem>
              <Checkbox id="notdue" onCheck={onCheck} form={form}>
                Not suitable due to lack of specialized experience
              </Checkbox>
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox id="notfit" onCheck={onCheck} form={form}>
                Did not fit in soft skills
              </Checkbox>
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox id="bedtest" onCheck={onCheck} form={form}>
                Bad test
              </Checkbox>
            </CheckboxItem>
            <CheckboxItem>
              <Checkbox id="other" onCheck={onCheck} form={form}>
                Other
              </Checkbox>
            </CheckboxItem>
          </CheckboxList>
        </Area>
        <RateList>
          <Rate>Team Player</Rate>
          <Rate>Professional Skills</Rate>
          <Rate>Parameter #3</Rate>
        </RateList>
        <Feedback placeholder="Your feedback" />
      </FormBody>
    </form>
  );
};
// Form3.propTypes = {
//   onChange: PropTypes.func,
// };

export default Form3;
