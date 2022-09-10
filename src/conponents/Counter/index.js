import React from "react";

import Flex from "../Flex";

import { Wrapper, Minus, Middle, Plus, Span } from "./styles";

const Counter = ({ children }) => {
  return (
    <Wrapper>
      <Minus />
      <Middle>
        <Flex height="42px">
          <Span>1</Span>
        </Flex>
      </Middle>
      <Plus />
    </Wrapper>
  );
};
export default Counter;
