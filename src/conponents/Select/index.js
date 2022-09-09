import React from "react";

import { SelectContainer, StyledSelect, LabelSelect } from "./styles";

const Select = ({ children, width }) => {
  return (
    <SelectContainer>
      <LabelSelect>
        <StyledSelect width={width}>{children}</StyledSelect>
      </LabelSelect>
    </SelectContainer>
  );
};
// Form.propTypes = {
//   onChange: PropTypes.func,
// };

export default Select;
