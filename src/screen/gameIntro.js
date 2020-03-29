import React from "react";
import { Heading, Text, Underlay, FlexRow, PrimaryButton } from "../components";
import {
  healthBubble,
  plus,
  newTask,
  home,
  poppedBubble,
  twoPeople,
  group
} from "../assets";
import { useHistory } from "react-router-dom";

const GameIntro = ({ introAllSeen }) => {
  let history = useHistory();

  return (
    <Underlay>
      <Heading> How to WIN</Heading>

      <Text>Start the week with a new challenge and 3 bubbles</Text>
      <FlexRow>
        <img src={newTask} style={{ height: 60 + "px" }} />
        <img src={plus} style={{ height: 50 + "px" }} />
        <img src={healthBubble} style={{ height: 60 + "px" }} />{" "}
        <img
          src={healthBubble}
          style={{ height: 60 + "px", marginLeft: -16 + "px" }}
        />
        <img
          src={healthBubble}
          style={{ height: 60 + "px", marginLeft: -16 + "px" }}
        />
      </FlexRow>

      <Heading>Don’t burst any bubbles by breaking social distance!</Heading>
      <FlexRow>
        <img src={twoPeople} style={{ height: 30 + "px", margin: 15 + "px" }} />
        <img src={group} style={{ height: 40 + "px", margin: 15 + "px" }} />
        <img src={home} style={{ height: 40 + "px", margin: 15 + "px" }} />
        <img
          src={poppedBubble}
          style={{ height: 60 + "px", margin: 15 + "px" }}
        />
      </FlexRow>

      <Text>Keep your bubbles safe by Sunday and get rewards!</Text>

      <PrimaryButton
        onClick={() => {
          introAllSeen();
          history.push("/distance");
        }}
      >
        What’s social distancing?
      </PrimaryButton>
    </Underlay>
  );
};

export default GameIntro;
