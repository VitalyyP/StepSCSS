import React from "react";

import { Wrapper, Title, Stars, Star } from "./styles";

const Rate = ({ children }) => {
  return (
    <Wrapper>
      <Title>{children}</Title>
      <Stars>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Stars>
    </Wrapper>
  );
};
export default Rate;
