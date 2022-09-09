import React, { useState } from "react";

import Home from "./pages/Home";
import Modal from "../src/conponents/Modal";
import Title from "./conponents/Title";
import StepList from "./conponents/StepList";
import Form1 from "./conponents/Form1";
import Form2 from "./conponents/Form2";
import Button from "./conponents/Button";
import Flex from "./conponents/Flex";

function App() {
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <Home openModal={toggleModal} />
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
            <Title>create stage</Title>
            <StepList>
              ['basic configuration', 'team/votes', 'feedback']
            </StepList>
            <Form2 />
            <Flex margin="39px 0 0 0" justify="end">
              <Button>Next</Button>
            </Flex>
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
