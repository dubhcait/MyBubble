import React, { useState } from "react";
import {
  CircularUnderlay,
  BubblePlus,
  BubbleX,
  Bubble,
  Heading,
  FlexRow,
  FlexColumn
} from "../components";

const MainScreen = ({ lifeCount }) => {
  const [status, setStatus] = useState("BubblePlus");

  const renderStatus = () => {
    switch (status) {
      case "BubbleWarning":
        return Bubble();
      case "BubblePop":
        return BubbleX();
      default:
        return BubblePlus();
    }
  };

  const LifeCount = lifeCount => {
    return lifeCount.map((i, k) => <Bubble key={k} />);
  };

  return (
    <FlexColumn>
      <Heading>Life Count</Heading>
      <FlexRow>{LifeCount(lifeCount)}</FlexRow>
      <CircularUnderlay>{renderStatus()}</CircularUnderlay>
    </FlexColumn>
  );
};

export default MainScreen;
