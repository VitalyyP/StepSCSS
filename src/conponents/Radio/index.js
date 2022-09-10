import React from "react";

import { CheckboxContainer, InputRadio, LabelRadio } from "./styles";

const Radio = ({ name, children, checked }) => {
  return (
    <LabelRadio>
      <InputRadio name={name} value={children} checked={checked} />
      {children}
    </LabelRadio>
  );
};
// Form.propTypes = {
//   onChange: PropTypes.func,
// };

export default Radio;
