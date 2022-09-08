// export default function Form() {
//   return (
//     <>
//       <form action="">
//         <input type="text" />
//         <input type="text" />
//         <input type="text" />
//         <input type="checkbox" />
//         <input type="checkbox" />
//         <input type="button" />
//         <input type="submit" />
//       </form>
//     </>
//   );
// }
import React, { useState } from "react";

import Checkbox from "../Checkbox/";
import PropTypes from "prop-types";
import { Wrapper, InputText, InputFile, Button, FormBody } from "./styles";

const Form = (props) => {
  const [form, setForm] = useState({
    // value: "",
    // date: new Date().toISOString().substring(0, 10),
    // comment: "",
  });

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
    <Wrapper>
      <form onSubmit={onSubmit}>
        <FormBody>
          <InputText
            type="text"
            name="stageTitle"
            placeholder="Stage Title"
            value={form.value}
            onChange={onChange}
          />
          <InputText
            type="text"
            name="stageSubtitle"
            placeholder="Stage Subtitle"
            value={form.value}
            onChange={onChange}
          />
          <InputText
            type="text"
            name="stageType"
            placeholder="Test Task"
            value={form.value}
            onChange={onChange}
          />
          <Checkbox id="canUpload" onCheck={onCheck} form={form}>
            Candidate can upload files
          </Checkbox>
          <Checkbox id="canDownload" onCheck={onCheck} form={form}>
            Candidate can download files
          </Checkbox>
          <InputFile />
        </FormBody>
        <Button>Save</Button>
      </form>
    </Wrapper>
  );
};
Form.propTypes = {
  onChange: PropTypes.func,
};

export default Form;
