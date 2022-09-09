import React from "react";

import { Flex, MainText } from "./styles";

const Home = ({ openModal }) => {
  return (
    <>
      <Flex>
        <MainText onClick={openModal}>
          Click here to vote and leave feedback
        </MainText>
      </Flex>
    </>
  );
};

export default Home;
