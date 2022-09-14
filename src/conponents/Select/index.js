import React from "react";

import { SelectContainer, StyledSelect, LabelSelect } from "./styles";

const Select = ({ children, width, onChange, id }) => {
  return (
    <SelectContainer onChange={onChange} id={id}>
      <LabelSelect>
        <StyledSelect width={width}>{children}</StyledSelect>
      </LabelSelect>
    </SelectContainer>
  );
};

export default Select;
