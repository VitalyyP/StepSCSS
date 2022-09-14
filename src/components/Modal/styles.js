import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  width: 836px;
  background-color: #fff;
  padding: 40px 32px;
  border-radius: 20px;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 24px;
  right: 32px;
  width: 32px;
  height: 12px;
  cursor: pointer;
  color: #aab4bd;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
`;
