import React from "react";
import styled from "styled-components";
import { topLeftBubbles, bottomRightBubbles } from "../assets";

const UnderlayStyle = styled.div`
  width: 100vw;
  height: 100vh;

  background: #ffffff;

  position: relative;
`;

const ImgTop = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;

const ImgBottom = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Internal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Underlay = ({ children, bubbles = true }) => (
  <UnderlayStyle>
    <Internal style={{ zIndex: 2000 }}>{children}</Internal>
    {bubbles && <ImgTop src={topLeftBubbles} />}
    {bubbles && <ImgBottom src={bottomRightBubbles} />}
  </UnderlayStyle>
);

const CircularUnderlay = styled.div`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexRow = styled.div`
  display: flex;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Underlay, FlexRow, FlexColumn, CircularUnderlay };
