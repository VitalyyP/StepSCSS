import React from "react";

import { Wrapper, Title, Stars, Star } from "./styles";

const Rate = ({ children, onClick, rate }) => {
  const stars = [0, 1, 2, 3, 4];
  return (
    <Wrapper>
      <Title>{children}</Title>
      <Stars id={children} onClick={onClick}>
        {stars.map((el, i) => {
          const id = i + 1;
          return <Star key={id} id={id} isFilled={el < rate} />;
        })}
      </Stars>
    </Wrapper>
  );
};

export default Rate;
