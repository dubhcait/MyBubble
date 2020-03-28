import styled from "styled-components";

const Underlay = styled.div`
  width: 317px;
  height: 454px;
  left: 29px;
  top: 179px;

  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
