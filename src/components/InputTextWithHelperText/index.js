import React from "react";

import { InputText, LabelText, HelperText } from "./styles";
import "./styles.css";

const InputTextWithHelperText = ({ children, ...rest }) => {
  return (
    <LabelText>
      <InputText
        {...rest}
        onFocus={(e) => {
          e.currentTarget.classList.add("focusWithText");
        }}
        onBlur={(e) => {
          if (!e.currentTarget.value) {
            e.currentTarget.classList.remove("focusWithText");
          }
        }}
      />
      <HelperText className="helperText">{children}</HelperText>
    </LabelText>
  );
};

export default InputTextWithHelperText;
