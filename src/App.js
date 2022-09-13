import React, { useState, useContext } from "react";

import { AppContext } from "./providers";
import Home from "./pages/Home";
import Modal from "../src/conponents/Modal";
import Title from "./conponents/Title";
import StepList from "./conponents/StepList";
import Form1 from "./conponents/Form1";
import Form2 from "./conponents/Form2";
import Form3 from "./conponents/Form3";
import Button from "./conponents/Button";
import Flex from "./conponents/Flex";

function App() {
  const [showModal, setShowModal] = useState(true);
  const { state, dispatch } = useContext(AppContext);
  const { step } = state;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const setStep = () => {
    if (state.step >= 3) {
      setShowModal(!showModal);
      dispatch({ type: "resetStep" });
    }
    dispatch({ type: "incrementStep" });
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
            {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
            {/* <Form2 /> */}
            <Flex margin="39px 0 0 0" justify="end">
              <Button onClick={setStep}>Next</Button>
            </Flex>
          </Modal>
        </>
      )}
    </div>
  );
}

export default App;
