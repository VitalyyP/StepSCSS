import React from "react";

import { CheckboxContainer, InputCheckbox, LabelCheckbox } from "./styles";

const Checkbox = ({ id, onCheck, form, children }) => {
  return (
    <CheckboxContainer>
      <InputCheckbox type="checkbox" id={id} name={id} onChange={onCheck} />
      <LabelCheckbox htmlFor={id} name={id} checked={form[id]}>
        {children}
      </LabelCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
