import React from "react";

import { CheckboxContainer, InputCheckbox, LabelCheckbox } from "./styles";

const CheckboxForVote = ({ id, onCheck, form, children }) => {
  return (
    <CheckboxContainer>
      <LabelCheckbox name={id} checked={form[id]}>
        <InputCheckbox type="checkbox" name={id} onChange={onCheck} />
        {children}
        <spant>Vote</spant>
      </LabelCheckbox>
    </CheckboxContainer>
  );
};

// Form.propTypes = {
//   onChange: PropTypes.func,
// };

export default CheckboxForVote;
