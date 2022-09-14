import React, { useState, useContext } from "react";

import { AppContext } from "./providers";
import Home from "./pages/Home";
import Modal from "../src/components/Modal";
import Title from "./components/Title";
import StepList from "./components/StepList";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Button from "./components/Button";
import Flex from "./components/Flex";

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
