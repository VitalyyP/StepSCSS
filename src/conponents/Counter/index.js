import React from "react";

import Flex from "../Flex";

import { Wrapper, FalseButton, Middle, Span } from "./styles";

const Counter = ({ children }) => {
  return (
    <Wrapper>
      <FalseButton />
      <Middle>
        <Flex height="42px">
          <Span>1</Span>
        </Flex>
      </Middle>
      <FalseButton />
    </Wrapper>
  );
};
export default Counter;
