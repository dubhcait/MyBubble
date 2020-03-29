import React from "react";
import styled from "styled-components";
import { topLeftBubbles, bottomRightBubbles } from "../assets";

const UnderlayStyle = styled.div`
  width: 100vw;
  height: 100vh;

  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Underlay = ({ children }) => (
  <UnderlayStyle>
    <img src={topLeftBubbles} />
    {children}
    <img src={bottomRightBubbles} />
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
