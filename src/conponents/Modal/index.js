import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import { Overlay, ModalContent, ModalClose } from "./styles";

const modalRoot = document.createElement("div");

export default function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.appendChild(modalRoot);
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      document.body.removeChild(modalRoot);
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    if (e.code === "Escape") {
      onClose();
    }
  }

  function handleBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        {children}
        <ModalClose onClick={() => onClose()}>close</ModalClose>
      </ModalContent>
    </Overlay>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};
