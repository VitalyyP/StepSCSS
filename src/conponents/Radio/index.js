import React from "react";

import { CheckboxContainer, InputRadio, LabelRadio } from "./styles";

const Radio = ({ children, votes, ...rest }) => {
  const isChecked = votes.find((el) => el.category === children).isChecked;
  return (
    <LabelRadio isChecked={isChecked}>
      <InputRadio {...rest} />
      {children}
    </LabelRadio>
  );
};
// Form.propTypes = {
//   onChange: PropTypes.func,
// };

export default Radio;
