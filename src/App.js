import React, { useState } from "react";

import Modal from "../src/conponents/Modal";
import Title from "./conponents/Title";
import StepList from "./conponents/StepList";
import Form from "./conponents/Form";

function App() {
  // const [searchValue, setSearchValue] = useState(" ");
  const [showModal, setShowModal] = useState(false);
  // const [modalImg, setModalImg] = useState("");

  // const getSearchValues = (searchValue) => setSearchValue(searchValue);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = (e) => {
    const { dataset, nodeName } = e.target;

    // if (nodeName === "IMG") {
    //   setModalImg(dataset.large);
    //   setShowModal(!showModal);
    // }
  };

  return (
    <div className="App">
      <Title>create stage</Title>
      <StepList>['basic configuration', 'team/votes', 'feedback']</StepList>
      <Form />
      {showModal && (
        <Modal onClose={toggleModal}>
          {/* <img src={modalImg} alt="" /> */}
        </Modal>
      )}
    </div>
  );
}

export default App;
