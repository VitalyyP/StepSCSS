import React from "react";

import {
  CheckboxContainer,
  InputCheckbox,
  LabelCheckbox,
  Span,
} from "./styles";

const CheckboxForVote = ({ name, onCheck, members, children }) => {
  return (
    <CheckboxContainer>
      <LabelCheckbox
        name={name}
        checked={members.find((el) => el.name === name).veto}
      >
        <InputCheckbox type="checkbox" name={name} onChange={onCheck} />
        {children}
        <Span>Vote</Span>
      </LabelCheckbox>
    </CheckboxContainer>
  );
};

export default CheckboxForVote;
