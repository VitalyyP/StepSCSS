import React from "react";

import { InputRadio, LabelRadio } from "./styles";

const Radio = ({ children, votes, ...rest }) => {
  const isChecked = votes.find((el) => el.category === children).isChecked;
  return (
    <LabelRadio isChecked={isChecked}>
      <InputRadio {...rest} />
      {children}
    </LabelRadio>
  );
};

export default Radio;
