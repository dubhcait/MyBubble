import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const StyledModal = styled.section`
  width: 300px;
  padding: 30px;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <StyledModal>{children}</StyledModal>,
    document.getElementById("modal-root")
  );
};

export { Modal };
