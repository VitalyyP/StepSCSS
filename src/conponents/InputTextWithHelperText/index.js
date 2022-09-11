import React from "react";

import { InputText, LabelText, HelperText } from "./styles";

const InputTextWithHelperText = ({ children }) => {
  return (
    <LabelText>
      <InputText />
      <HelperText>{children}</HelperText>
    </LabelText>
  );
};
export default InputTextWithHelperText;
