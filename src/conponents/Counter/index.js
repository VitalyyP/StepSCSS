import React, { useContext } from "react";
// import PropTypes from "prop-types";

import { AppContext } from "../../providers/";
import Flex from "../Flex";
import { Wrapper, Minus, Middle, Plus, Span } from "./styles";

const Counter = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <Wrapper>
      <Minus onClick={() => dispatch({ type: "decrementRate" })} />
      <Middle>
        <Flex height="42px">
          <Span>{state.rate}</Span>
        </Flex>
      </Middle>
      <Plus onClick={() => dispatch({ type: "incrementRate" })} />
    </Wrapper>
  );
};
export default Counter;
